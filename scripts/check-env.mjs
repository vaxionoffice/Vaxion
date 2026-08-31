import nextEnv from "@next/env";

const { loadEnvConfig } = nextEnv;
loadEnvConfig(process.cwd());

const required = [
  "NEXT_PUBLIC_SUPABASE_URL",
  "NEXT_PUBLIC_SUPABASE_ANON_KEY",
  "RESEND_API_KEY",
  "RESEND_FROM_EMAIL",
  "NEXT_PUBLIC_SITE_URL",
];

console.log("Vaxion environment check (values are intentionally hidden)\n");
let hasMissing = false;

for (const key of required) {
  const value = process.env[key]?.trim();
  const state = value ? "SET" : "MISSING";
  console.log(`${state.padEnd(8)} ${key}`);
  if (!value) hasMissing = true;
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
if (supabaseUrl) {
  try {
    const url = new URL(supabaseUrl);
    console.log(`\nSupabase host: ${url.host}`);
    if (url.protocol !== "https:") console.log("WARNING  Supabase URL should normally use https://");
  } catch {
    console.log("WARNING  NEXT_PUBLIC_SUPABASE_URL is not a valid URL");
  }
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
if (siteUrl) {
  try {
    const url = new URL(siteUrl);
    console.log(`Site host: ${url.host}`);
  } catch {
    console.log("WARNING  NEXT_PUBLIC_SITE_URL is not a valid URL");
  }
}

console.log(hasMissing ? "\nResult: add the missing variables, then restart Next.js." : "\nResult: all required variables are present. Restart Next.js if you just changed them.");
process.exitCode = hasMissing ? 1 : 0;
