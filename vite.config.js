import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';

// Include ALL five pages when building, not just the Home page.
const page = (name) => fileURLToPath(new URL(name, import.meta.url));

export default defineConfig({
  plugins: [react()],
  // Relative asset paths also work when the site is hosted in a subfolder.
  base: './',
  build: {
    rolldownOptions: {
      input: {
        home: page('index.html'),
        about: page('about.html'),
        contact: page('contact.html'),
        app: page('app.html'),
        signin: page('signin.html'),
      },
    },
  },
});
