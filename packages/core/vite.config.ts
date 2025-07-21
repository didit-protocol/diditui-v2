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
        'input-otp',
        'react-hook-form',
        'sonner'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
          tailwindcss: 'tailwindcss',
          clsx: 'clsx',
          qrcode: 'QRCode',
          'react-day-picker': 'ReactDayPicker',
          'tailwind-merge': 'tailwindMerge',
          'tailwind-variants': 'tailwindVariants',
          'input-otp': 'InputOTP',
          'react-hook-form': 'ReactHookForm',
          'sonner': 'Sonner',
          // Radix UI globals
          '@radix-ui/react-slot': 'RadixSlot',
          '@radix-ui/react-label': 'RadixLabel',
          '@radix-ui/react-switch': 'RadixSwitch',
          '@radix-ui/react-slider': 'RadixSlider',
          '@radix-ui/react-tooltip': 'RadixTooltip',
          '@radix-ui/react-radio-group': 'RadixRadioGroup',
          '@radix-ui/react-checkbox': 'RadixCheckbox',
          '@radix-ui/react-popover': 'RadixPopover',
          '@radix-ui/react-select': 'RadixSelect',
          '@radix-ui/react-dropdown-menu': 'RadixDropdownMenu',
          '@radix-ui/react-hover-card': 'RadixHoverCard',
          '@radix-ui/react-avatar': 'RadixAvatar',
          '@radix-ui/react-progress': 'RadixProgress',
          '@radix-ui/react-separator': 'RadixSeparator',
          '@radix-ui/react-dialog': 'RadixDialog',
          '@radix-ui/react-tabs': 'RadixTabs',
          '@radix-ui/react-alert-dialog': 'RadixAlertDialog',
          '@radix-ui/react-scroll-area': 'RadixScrollArea'
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
