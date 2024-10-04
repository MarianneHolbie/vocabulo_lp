import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  optimizeDeps: {
    include: ['gsap']
  },
  ssr: {
    noExternal: ['gsap']
  },
  build: {
    rollupOptions: {
      external: ['@sveltejs/kit', 'svelte']
    }
  }
});
