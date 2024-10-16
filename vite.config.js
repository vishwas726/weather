import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Bind to 0.0.0.0 to allow external connections
    port: process.env.PORT || 5173,  // Use the PORT provided by Render or fallback to 5173
  },
});
