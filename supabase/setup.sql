-- ============================================================
-- Bright Public School — site backend setup
-- Run this ONCE in the Supabase SQL Editor of the school's project.
-- Creates: config table (public read) + password-gated admin RPC.
-- Default admin password: bps@2026  (change it from the admin panel!)
-- ============================================================

create extension if not exists pgcrypto with schema extensions;

-- Single-row site configuration (everything the admin panel edits)
create table if not exists public.bps_config (
  id int primary key default 1 check (id = 1),
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);
insert into public.bps_config (id, data) values (1, '{}'::jsonb)
on conflict (id) do nothing;

-- Private admin credentials (no public access)
create table if not exists public.bps_admin (
  id int primary key default 1 check (id = 1),
  pass_hash text not null
);
insert into public.bps_admin (id, pass_hash)
values (1, extensions.crypt('bps@2026', extensions.gen_salt('bf')))
on conflict (id) do nothing;

-- RLS: config readable by everyone, admin table locked down
alter table public.bps_config enable row level security;
alter table public.bps_admin enable row level security;

drop policy if exists "public read config" on public.bps_config;
create policy "public read config" on public.bps_config
  for select to anon, authenticated using (true);
-- (no insert/update/delete policies → writes only via the RPC below)
-- (no policies at all on bps_admin → completely inaccessible from the API)

-- Password-gated admin RPC
create or replace function public.bps_admin_exec(
  p_password text,
  p_action text,
  p_payload jsonb default '{}'::jsonb
) returns jsonb
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_hash text;
begin
  select pass_hash into v_hash from public.bps_admin where id = 1;
  if v_hash is null or crypt(coalesce(p_password, ''), v_hash) <> v_hash then
    return jsonb_build_object('ok', false, 'error', 'Incorrect password');
  end if;

  if p_action = 'verify' then
    return jsonb_build_object('ok', true);

  elsif p_action = 'save' then
    if pg_column_size(p_payload) > 8 * 1024 * 1024 then
      return jsonb_build_object('ok', false, 'error', 'Data too large (8MB limit). Use fewer or smaller photos.');
    end if;
    update public.bps_config set data = p_payload, updated_at = now() where id = 1;
    return jsonb_build_object('ok', true);

  elsif p_action = 'change_password' then
    if length(coalesce(p_payload->>'new_password', '')) < 6 then
      return jsonb_build_object('ok', false, 'error', 'Password must be at least 6 characters');
    end if;
    update public.bps_admin set pass_hash = crypt(p_payload->>'new_password', gen_salt('bf')) where id = 1;
    return jsonb_build_object('ok', true);

  else
    return jsonb_build_object('ok', false, 'error', 'Unknown action');
  end if;
end;
$$;

-- Allow anonymous clients to call the RPC (password check happens inside)
revoke all on function public.bps_admin_exec(text, text, jsonb) from public;
grant execute on function public.bps_admin_exec(text, text, jsonb) to anon, authenticated;
