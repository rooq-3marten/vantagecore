import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: [
        { find: /^next\/link$/, replacement: path.resolve(__dirname, 'src/shims/link.tsx') },
        { find: /^next\/image$/, replacement: path.resolve(__dirname, 'src/shims/image.tsx') },
        { find: /^next\/navigation$/, replacement: path.resolve(__dirname, 'src/shims/navigation.ts') },
        { find: /^next\/font\/google$/, replacement: path.resolve(__dirname, 'src/shims/font-google.ts') },
        { find: /^next$/, replacement: path.resolve(__dirname, 'src/shims/next.ts') },
        { find: '@', replacement: path.resolve(__dirname, '.') },
      ],
      dedupe: ['react', 'react-dom'],
    },
    optimizeDeps: {
      entries: [
        'index.html',
        'src/**/*.{ts,tsx}',
        'app/**/*.{ts,tsx}',
        'components/**/*.{ts,tsx}',
        'lib/**/*.{ts,tsx}',
      ],
      include: [
        'react',
        'react-dom',
        'react-dom/client',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
      ],
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    preview: {
      port: 3000,
      host: '0.0.0.0',
    },
  };
});
