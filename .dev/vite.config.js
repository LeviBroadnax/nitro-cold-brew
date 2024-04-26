import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

const server = {
  hmr: {
    clientPort: 443
  }
};

export default defineConfig({
  server,
  resolve: {
    alias: {
      "@src": resolve(__dirname, "./src")
    }
  },
  plugins: [react()]
});
