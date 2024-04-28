import react from "@vitejs/plugin-react";
import glsl from "vite-plugin-glsl";

import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    hmr: {
      clientPort: 443
    }
  },
  resolve: {
    alias: {
      "@components": resolve(__dirname, "./src/components"),
      "@materials": resolve(__dirname, "./src/materials"),
      "@shaders": resolve(__dirname, "./src/shaders"),
      "@store": resolve(__dirname, "./src/store")
    }
  },
  plugins: [
    react({
      include: "src/**/*.tsx"
    }),
    glsl({
      include: ["./src/shaders/*.frag", "./src/shaders/*.vert"]
    })
  ]
});
