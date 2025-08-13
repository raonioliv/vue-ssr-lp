/// <reference types="vite/client" />


interface ImporMetaEnv {
    readonly VITE_API_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}