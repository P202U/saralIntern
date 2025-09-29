import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    // VitePWA({
    //   registerType: 'autoUpdate',
    //   manifest: {
    //     name: 'SaralIntern: AI internship recommendation system',
    //     short_name: 'SaralIntern',
    //     start_url: '.',
    //     display: 'standalone',
    //     background_color: '#ffffff',
    //     theme_color: '#4a90e2',
    //     icons: [
    //       {
    //         src: 'icons/icon-192x192.png',
    //         sizes: '192x192',
    //         type: 'image/png',
    //       },
    //       {
    //         src: 'icons/icon-512x512.png',
    //         sizes: '512x512',
    //         type: 'image/png',
    //       },
    //     ],
    //   },
    //   workbox: {
    //     globPatterns: ['**/*.{js,css,html,png,svg}'],
    //   },
    // }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
