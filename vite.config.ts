import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon/favicon.ico',
        'favicon/apple-touch-icon.png',
        'favicon/icon-192x192.png',
        'favicon/icon-512x512.png',
        'offline.html',
      ],
      manifest: {
        name: 'SaralIntern: AI internship recommendation system',
        short_name: 'SaralIntern',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#4a90e2',
        icons: [
          {
            src: '/favicon/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/favicon/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png}'],
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.mode === 'navigate',
            handler: 'NetworkFirst',
            options: {
              cacheName: 'pages',
              networkTimeoutSeconds: 5,
              expiration: {
                maxEntries: 50,
              },
            },
          },
        ],
        navigateFallback: '/offline.html',
      },
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
