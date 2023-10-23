/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string
  readonly VITE_APP_TITLE: string
  readonly VITE_SERVER_HOST: string
  readonly VITE_SERVER_PORT: string
  readonly VITE_BACKEND_SERVER: string
  readonly VITE_MINIO_SERVER: string
  readonly VITE_SERVER_KEY: string
  readonly VITE_SERVER_CERT: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}