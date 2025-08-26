/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAILJS_PUBLIC_KEY: string;
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_TEMPLATE_ID: string;
  readonly VITE_EMAILJS_THROTTLE_TIME: number;
  readonly VITE_EMAILJS_ORIGIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
