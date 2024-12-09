import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
    server: {
        proxy: {
            "/api": {
                target: "http://localhost:3000",
                changeOrigin: true,
                // rewrite: (path) => path.replace(/^\/api/, ""),
            },
            "public": {
                target: "http://localhost:3000",
                changeOrigin: true,
                // rewrite: (path) => path.replace(/^\/public/, ""),
            },
        },
    },
    plugins: [react()],
    });