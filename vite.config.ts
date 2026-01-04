import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { writeFileSync, readFileSync } from "fs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/battlegrounds-snowdown-ui/" : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    {
      name: "add-nojekyll",
      closeBundle() {
        if (mode === "production") {
          writeFileSync(path.resolve(__dirname, "dist/.nojekyll"), "");
        }
      },
    },
    {
      name: "add-404",
      closeBundle() {
        if (mode === "production") {
          const distPath = path.resolve(__dirname, "dist");
          const indexContent = readFileSync(path.resolve(distPath, "index.html"), "utf-8");
          writeFileSync(path.resolve(distPath, "404.html"), indexContent);
        }
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
