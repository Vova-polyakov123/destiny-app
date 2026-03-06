import { defineConfig, transformWithEsbuild } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

function handleModuleDirectivesPlugin() {
  return {
    name: "handle-module-directives-plugin",
    transform(code, id) {
      if (id.includes("@vkontakte/icons")) {
        code = code.replace(/"use-client";?/g, "");
      }
      return { code };
    },
  };
}

function treatJsFilesAsJsx() {
  return {
    name: "treat-js-files-as-jsx",
    async transform(code, id) {
      if (!id.match(/src\/.*\.js$/)) return null;

      return transformWithEsbuild(code, id, {
        loader: "jsx",
        jsx: "automatic",
      });
    },
  };
}

export default defineConfig({
  base: "./",

  plugins: [
    react(),
    treatJsFilesAsJsx(),
    handleModuleDirectivesPlugin(),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],

  optimizeDeps: {
    force: true,
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },

  build: {
    outDir: "dist"
  }
});