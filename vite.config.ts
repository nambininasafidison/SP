import react from "@vitejs/plugin-react";
// import { createRequire } from "module";
import path from "path";
import { defineConfig } from "vite";
import sitemap from "vite-plugin-sitemap";

// const require = createRequire(import.meta.url);
// const vitePrerender = require("vite-plugin-prerender");

export default defineConfig({
  plugins: [
    react(),
    // vitePrerender.default({
    //   staticDir: path.resolve(__dirname, "dist"),
    //   routes: ["/", "/about", "/contact", "/projects", "/services"],
    // }),
    sitemap({
      hostname: "https://safidisonraherizo.vercel.app",
      dynamicRoutes: ["/", "/about", "/contact", "/projects", "/services"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
