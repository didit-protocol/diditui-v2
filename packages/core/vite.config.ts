import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import dts from 'vite-plugin-dts'
import tailwindcss from '@tailwindcss/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { name } from './package.json'


const formattedName = name.match(/[^/]+$/)?.[0] ?? name


// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }]
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: formattedName,
      formats: ['es', 'umd'],
      fileName: (format) => `${formattedName}.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', "tailwindcss"],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'React-dom',
          'react/jsx-runtime': 'react/jsx-runtime',
          tailwindcss: 'tailwindcss',
        },
      },
    },
  },
  plugins: [
    react(),
    dts({ rollupTypes: true }),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        {
          src: resolve(__dirname, 'src/tailwind/theme.css'),
          dest: './',
        },
      ],
    }),
  ],
})
