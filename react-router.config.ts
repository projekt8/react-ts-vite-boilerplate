import type { Config } from '@react-router/dev/config';

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  basename: process.env.BASE_PATH ?? '/',
  routeDiscovery: { mode: 'initial' },
  ssr: true,
  prerender() {
    return ['/', '/about'];
  },
} satisfies Config;
