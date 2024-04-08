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

    vue({

      template: {

        compilerOptions: {

          isCustomElement: tag => tag.startsWith('swiper-'),

        }
        
      }

    }),

    eslintPlugin({

      include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue'],

    }),

    ckeditor5({
      
      theme: require.resolve('@ckeditor/ckeditor5-theme-lark'),
    
    }),

  ],

  resolve: {

    alias: {

      '@': fileURLToPath(new URL('./src', import.meta.url)),

    },

  },

  build: {

    rollupOptions: {

      output: {

        manualChunks(id) {

          try {

            if (id.includes('node_modules')) {

              // 解決 ckeditor 套件過肥問題 ( pnpm ver. )

              let name = id.split('node_modules/')[1].split('/');

              if (name[0] == '.pnpm') { return name[1] }
              else { return name[0] }

              // 以下是 npm 的做法

              // return id.toString().split('node_modules/')[1].split('/')[0].toString();

            }

          } catch(error) { console.log(error); }

        }

      }

    }

  }

});
