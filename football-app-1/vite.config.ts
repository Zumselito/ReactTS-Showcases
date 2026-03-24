import { defineConfig, loadEnv } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      babel({ presets: [reactCompilerPreset()] }),
      tailwindcss()
    ],
    server: {
      host: '0.0.0.0',
      port: parseInt(env.PORT) || 5173,
      watch: {
        usePolling: true,
      },
      fs: {
        allow: ['../..']
      }
    },
    base: '/react-ts-tw-football-app-showcase/'
  }
})
