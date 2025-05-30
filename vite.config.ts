import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ["da21-2a09-bac1-36c0-60-00-1a9-10.ngrok-free.app"],
  },
});
