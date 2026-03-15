// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import Icons from "unplugin-icons/vite";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en", "it", "es", "ar"],
    routing: { prefixDefaultLocale: false },
  },
  server: {
    port: 4321,
    host: true,
  },
  vite: {
    plugins: [tailwindcss(), Icons({ compiler: "astro", autoInstall: true })],
    server: {
      proxy: {
        '/api': { target: 'http://localhost:3001', changeOrigin: true },
      },
    },
    build: {
      rollupOptions: {
        onwarn(warning, defaultHandler) {
          if (warning.code === "UNUSED_EXTERNAL_IMPORT" && String(warning.message || "").includes("@astrojs/internal-helpers")) return;
          defaultHandler(warning);
        },
      },
    },
  },
});
