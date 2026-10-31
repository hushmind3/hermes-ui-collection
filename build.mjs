import { build, context } from 'esbuild'

const watch = process.argv.includes('--watch')
const options = {
  entryPoints: ['src/plugin.tsx'],
  bundle: true,
  format: 'esm',
  platform: 'browser',
  target: 'es2022',
  outfile: 'plugin.js',
  jsx: 'automatic',
  external: ['@hermes/plugin-sdk', 'react', 'react/jsx-runtime', 'react/jsx-dev-runtime'],
  logLevel: 'info'
}

if (watch) {
  const ctx = await context(options)
  await ctx.watch()
  console.log('watching src/ … (Ctrl+C to stop)')
} else {
  await build(options)
}
