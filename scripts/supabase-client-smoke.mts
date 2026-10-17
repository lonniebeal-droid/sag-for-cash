import assert from 'node:assert/strict';
import { getSupabase, publicSupabaseEnv, resetSupabaseForTests } from '../src/lib/supabase.ts';

const savedUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const savedKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

function withoutPublicEnv() {
  delete process.env.NEXT_PUBLIC_SUPABASE_URL;
  delete process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  resetSupabaseForTests();
}

try {
  assert.throws(
    () => publicSupabaseEnv({} as NodeJS.ProcessEnv),
    /Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY/,
  );

  withoutPublicEnv();
  assert.throws(
    () => getSupabase(),
    /Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY/,
  );

  process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://example.supabase.co';
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_smoke_not_a_secret';
  resetSupabaseForTests();
  const client = getSupabase();
  assert.equal(typeof client.auth.getSession, 'function');
  assert.equal(getSupabase(), client);

  console.log('supabase-client-smoke: 4 passed, 0 failed');
} finally {
  if (savedUrl === undefined) delete process.env.NEXT_PUBLIC_SUPABASE_URL;
  else process.env.NEXT_PUBLIC_SUPABASE_URL = savedUrl;
  if (savedKey === undefined) delete process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  else process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY = savedKey;
  resetSupabaseForTests();
}
