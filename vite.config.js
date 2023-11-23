import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA  } from "vite-plugin-pwa";
// https://vitejs.dev/config/
const manifestForPlugin = {
	registerType: "prompt",
	includeAssets: ["favicon.ico", "apple-touch-icon.png"],
	manifest: {
    "short_name": "Abhiram",
    "name": "Abhiram",
    "icons": [
      {
        "src": "favicon.ico",
        "sizes": "64x64 32x32 24x24 16x16",
        "type": "image/x-icon"
      },
      {
        "src": "logo192.png",
        "type": "image/png",
        "sizes": "192x192"
      },
      {
        "src": "logo256.png",
        "type": "image/png",
        "sizes": "256x256"
      },
      {
        "src": "logo384.png",
        "type": "image/png",
        "sizes": "384x384"
      },
      {
        "src": "logo512.png",
        "type": "image/png",
        "sizes": "512x512"
      }
    ],
    "theme_color": "#000000",
    "background_color": "#000000",
    "display": "standalone",
    "scope": "/",
    "start_url": "/",
  }
};
export default defineConfig({
  base: "./",
  plugins: [react(),VitePWA(manifestForPlugin)]
});
