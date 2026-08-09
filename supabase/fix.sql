-- ============================================================
-- FIX: Supabase par pgcrypto `extensions` schema mein hota hai,
-- isliye function ko wahan tak pahunch chahiye. Yeh script
-- function theek karti hai aur admin password dobara set karti hai.
-- SQL Editor mein poora paste karke RUN karein.
-- ============================================================

create extension if not exists pgcrypto with schema extensions;

-- Admin password (bps@2026) dobara seed karein — ab sahi schema ke saath
do $$
begin
  perform set_config('search_path', 'public, extensions', true);
  delete from public.bps_admin where id = 1;
  insert into public.bps_admin (id, pass_hash)
  values (1, crypt('bps@2026', gen_salt('bf')));
end $$;

-- Function: ab search_path mein `extensions` bhi shamil hai
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
    return jsonb_build_object('ok', false, 'error', 'Galat password');
  end if;

  if p_action = 'verify' then
    return jsonb_build_object('ok', true);

  elsif p_action = 'save' then
    if pg_column_size(p_payload) > 8 * 1024 * 1024 then
      return jsonb_build_object('ok', false, 'error', 'Data bahut bada hai (8MB limit). Kam/chhoti photos rakhein.');
    end if;
    update public.bps_config set data = p_payload, updated_at = now() where id = 1;
    return jsonb_build_object('ok', true);

  elsif p_action = 'change_password' then
    if length(coalesce(p_payload->>'new_password', '')) < 6 then
      return jsonb_build_object('ok', false, 'error', 'Password kam se kam 6 characters ka ho');
    end if;
    update public.bps_admin set pass_hash = crypt(p_payload->>'new_password', gen_salt('bf')) where id = 1;
    return jsonb_build_object('ok', true);

  else
    return jsonb_build_object('ok', false, 'error', 'Unknown action');
  end if;
end;
$$;

revoke all on function public.bps_admin_exec(text, text, jsonb) from public;
grant execute on function public.bps_admin_exec(text, text, jsonb) to anon, authenticated;
