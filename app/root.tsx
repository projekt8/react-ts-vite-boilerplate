import '@/styles/index.css';

import interFont from '@fontsource-variable/inter/files/inter-latin-wght-normal.woff2?url';
import playfairFont from '@fontsource-variable/playfair-display/files/playfair-display-latin-wght-normal.woff2?url';

import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from 'react-router';
import type { Route } from './+types/root';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';

export const links: Route.LinksFunction = () => [
  {
    rel: 'preload',
    href: interFont,
    as: 'font',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'preload',
    href: playfairFont,
    as: 'font',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'icon',
    href: '/favicon.svg',
    type: 'image/svg+xml',
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
        <Navbar />
        <main className="grid items-center gap-20 py-12 md:py-24">{children}</main>
        <Footer />

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {
  const error = useRouteError();
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404 ? 'The requested page could not be found.' : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <div className="container mx-auto flex flex-col items-center justify-center gap-8">
      <div className="max-w-xl text-center">
        <h1 className="text-error mb-8">{message}</h1>
        <p>{details}</p>
      </div>
      {stack && (
        <pre className="w-full overflow-x-auto rounded bg-black/10 p-4 text-left text-xs text-red-800 dark:text-red-200">
          <code>{stack}</code>
        </pre>
      )}
      <Button to="/">Go Home</Button>
    </div>
  );
}
