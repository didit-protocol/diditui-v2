import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import dts from 'vite-plugin-dts'
import tailwindcss from '@tailwindcss/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }]
  },
  build: {
    lib: {
      entry: {
        // Main entry point
        index: resolve(__dirname, 'src/index.ts'),
        // Components
        'alert-dialog': resolve(__dirname, 'src/components/alert-dialog.tsx'),
        avatar: resolve(__dirname, 'src/components/avatar.tsx'),
        badge: resolve(__dirname, 'src/components/badge.tsx'),
        button: resolve(__dirname, 'src/components/button.tsx'),
        calendar: resolve(__dirname, 'src/components/calendar.tsx'),
        card: resolve(__dirname, 'src/components/card.tsx'),
        checkbox: resolve(__dirname, 'src/components/checkbox.tsx'),
        collapsible: resolve(__dirname, 'src/components/collapsible.tsx'),
        dialog: resolve(__dirname, 'src/components/dialog.tsx'),
        'dropdown-menu': resolve(__dirname, 'src/components/dropdown-menu.tsx'),
        form: resolve(__dirname, 'src/components/form.tsx'),
        'hover-card': resolve(__dirname, 'src/components/hover-card.tsx'),
        'input-otp': resolve(__dirname, 'src/components/input-otp.tsx'),
        input: resolve(__dirname, 'src/components/input.tsx'),
        label: resolve(__dirname, 'src/components/label.tsx'),
        popover: resolve(__dirname, 'src/components/popover.tsx'),
        progress: resolve(__dirname, 'src/components/progress.tsx'),
        qrcode: resolve(__dirname, 'src/components/qrcode/index.tsx'),
        'radio-group': resolve(__dirname, 'src/components/radio-group.tsx'),
        'scroll-area': resolve(__dirname, 'src/components/scroll-area.tsx'),
        select: resolve(__dirname, 'src/components/select.tsx'),
        separator: resolve(__dirname, 'src/components/separator.tsx'),
        sheet: resolve(__dirname, 'src/components/sheet.tsx'),
        sidebar: resolve(__dirname, 'src/components/sidebar/index.tsx'),
        skeleton: resolve(__dirname, 'src/components/skeleton.tsx'),
        slider: resolve(__dirname, 'src/components/slider.tsx'),
        spinner: resolve(__dirname, 'src/components/spinner.tsx'),
        switch: resolve(__dirname, 'src/components/switch.tsx'),
        table: resolve(__dirname, 'src/components/table.tsx'),
        tabs: resolve(__dirname, 'src/components/tabs.tsx'),
        textarea: resolve(__dirname, 'src/components/textarea.tsx'),
        toast: resolve(__dirname, 'src/components/toast/index.tsx'),
        'toggle-group': resolve(__dirname, 'src/components/toggle-group.tsx'),
        tooltip: resolve(__dirname, 'src/components/tooltip.tsx'),
        // Hooks
        hooks: resolve(__dirname, 'src/hooks/index.ts'),
        'use-mobile': resolve(__dirname, 'src/hooks/use-mobile.ts'),
        'use-media-query-match': resolve(__dirname, 'src/hooks/use-media-query-match.ts'),
        // Utils
        utils: resolve(__dirname, 'src/utils/index.ts'),
        cn: resolve(__dirname, 'src/utils/cn.ts'),
        'media-queries': resolve(__dirname, 'src/utils/media-queries.ts'),
        // Types
        types: resolve(__dirname, 'src/types/index.ts'),
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'tailwindcss',
        // Radix UI dependencies
        /^@radix-ui\/.*/,
        // Utility libraries that consumers should install
        'clsx',
        'qrcode',
        'react-day-picker',
        'tailwind-merge',
        'tailwind-variants',
        // Peer dependencies
        '@diditui/icons-react',
        'input-otp',
        'react-hook-form',
        'sonner'
      ],
      output: {
        // Preserve the module structure for tree-shaking
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].js',
        // Ensure chunks have meaningful names
        chunkFileNames: '[name].js',
      },
    },
  },
  plugins: [
    react(),
    dts({
      // Generate declaration files for each module
      rollupTypes: false,
      include: ['src/**/*'],
      outDir: 'dist',
      // Preserve module structure for types
      entryRoot: 'src',
    }),
    // @ts-expect-error - Type mismatch due to different @types/node versions in monorepo
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
