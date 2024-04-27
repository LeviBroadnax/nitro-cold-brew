import react from "@vitejs/plugin-react";
import glsl from "vite-plugin-glsl";

import { resolve } from "path";
import { defineConfig } from "vite";

const server = {
  hmr: {
    clientPort: 443,
  },
};

const glslConfig = {
  include: ["./**/*.frag", "./**/*.vert"],
};

export default defineConfig({
  server,
  resolve: {
    alias: {
      "@src": resolve(__dirname, "./src"),
    },
  },
  plugins: [react(), glsl(glslConfig)],
});
