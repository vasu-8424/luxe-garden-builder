import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  css: {
    transformer: "lightningcss",
  },
  plugins: [
    tailwindcss(),
    tsconfigPaths(),
    tanstackStart({
      server: { entry: "server" },
    }),
    nitro({
      preset: "vercel",
    }),
    react(),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
