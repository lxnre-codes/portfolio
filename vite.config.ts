import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    // Use Bun's native watch functionality
    watch: {
      usePolling: false,
    },
  },
  optimizeDeps: {
    // Use Bun for dependency pre-bundling
    esbuildOptions: {
      target: "esnext",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
