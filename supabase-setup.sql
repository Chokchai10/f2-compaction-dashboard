create extension if not exists pgcrypto;

create table if not exists public.dashboard_state (
  id text primary key,
  payload jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists public.dashboard_secrets (
  id text primary key,
  password_hash text not null
);

insert into public.dashboard_secrets (id, password_hash)
values ('admin', extensions.crypt('1234', extensions.gen_salt('bf', 10)))
on conflict (id) do nothing;

alter table public.dashboard_state enable row level security;
alter table public.dashboard_secrets enable row level security;

revoke all on public.dashboard_state from anon, authenticated;
revoke all on public.dashboard_secrets from anon, authenticated;
grant select on public.dashboard_state to anon, authenticated;

drop policy if exists "Dashboard is publicly readable" on public.dashboard_state;
create policy "Dashboard is publicly readable"
on public.dashboard_state for select
to anon, authenticated
using (true);

create or replace function public.save_dashboard_state(admin_password text, state_payload jsonb)
returns timestamptz
language plpgsql
security definer
set search_path = public
as $$
declare
  saved_at timestamptz := now();
begin
  if not exists (
    select 1
    from public.dashboard_secrets
    where id = 'admin'
      and password_hash = extensions.crypt(admin_password, password_hash)
  ) then
    raise exception 'Invalid admin credentials' using errcode = '42501';
  end if;

  insert into public.dashboard_state (id, payload, updated_at)
  values ('f2-main', state_payload, saved_at)
  on conflict (id) do update
  set payload = excluded.payload,
      updated_at = excluded.updated_at;

  return saved_at;
end;
$$;

revoke all on function public.save_dashboard_state(text, jsonb) from public;
grant execute on function public.save_dashboard_state(text, jsonb) to anon, authenticated;

do $$
begin
  alter publication supabase_realtime add table public.dashboard_state;
exception
  when duplicate_object then null;
end $$;

notify pgrst, 'reload schema';
