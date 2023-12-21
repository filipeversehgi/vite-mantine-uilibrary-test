import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { PluginPure } from 'rollup-plugin-pure';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import pkg from './package.json';

export default defineConfig({
  plugins: [
    react(),
    PluginPure({
      functions: ['defineComponent'],
      include: [/(?<!im)pure\.js$/],
      // exclude: [],
      // sourcemap: true,
    }),
    dts({
      insertTypesEntry: true,
    }),
    tsconfigPaths(),
    visualizer(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.mjs',
  },
  build: {
    lib: {
      entry: resolve(__dirname, './src/lib.ts'),
      name: 'library',
      formats: ['es'],
      fileName: (format) => `lib.${format}.js`,
    },
    rollupOptions: {
      preserveEntrySignatures: 'strict',
      external: [...Object.keys(pkg.peerDependencies)],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: ({ name: fileName }) => {
          return `${fileName}.js`;
        },
        inlineDynamicImports: false,
        globals: {
          react: 'React',
          'react-dom': 'React-dom',
        },
      },
    },
  },
});
