/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// `base` must match the GitHub repo name (https://<user>.github.io/scm-eksamen/).
export default defineConfig({
  base: '/scm-eksamen/',
  plugins: [react()],
  test: { include: ['tests/**/*.test.ts', 'tests/**/*.test.tsx'] },
});
