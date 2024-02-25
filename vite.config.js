import 'dotenv/config';

import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

import ckeditor5 from '@ckeditor/vite-plugin-ckeditor5';

import vue from '@vitejs/plugin-vue';

// eslint-disable-next-line import/no-extraneous-dependencies
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/

export default defineConfig({

  base: process.env.NODE_ENV === 'production' ? `/2024-Art-Webshop-Project/` : '/',

  plugins: [
    vue(),
    ckeditor5({ theme: require.resolve('@ckeditor/ckeditor5-theme-lark') }),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue'],
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

});
