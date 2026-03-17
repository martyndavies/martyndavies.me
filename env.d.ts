/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SITE: string;
  readonly EMAIL: string;
  readonly GITHUB_USERNAME: string;
  readonly TWITTER_USERNAME: string;
  readonly LINKEDIN_USERNAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}