import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Output goes to build/, which scripts/postbuild.js and the gh-pages deploy expect.
export default defineConfig(({ mode }) => ({
    plugins: [react()],
    // caseStudies.js reads process.env.NODE_ENV (postbuild.js loads it outside the bundler too)
    define: {
        "process.env.NODE_ENV": JSON.stringify(mode),
    },
    server: {
        port: 3000,
        open: true,
    },
    build: {
        outDir: "build",
        emptyOutDir: true,
    },
}));
