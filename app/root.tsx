import './styles/index.css';

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

import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

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
      <body className="flex min-h-screen flex-col">
        <Navbar />

        <main className="flex grow flex-col items-center justify-center px-4 py-20">
          {children}
        </main>

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
    <main className="flex min-h-screen items-center justify-center bg-red-50 p-4 font-sans dark:bg-red-900/10">
      <div className="max-w-md text-center">
        <h2 className="mb-4 text-2xl font-bold text-red-600 dark:text-red-400">{message}</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">{details}</p>
        {stack && (
          <pre className="mb-6 w-full overflow-x-auto rounded bg-black/10 p-4 text-left text-xs text-red-800 dark:text-red-200">
            <code>{stack}</code>
          </pre>
        )}
        <a
          href="/"
          className="inline-block rounded bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700"
        >
          Go Home
        </a>
      </div>
    </main>
  );
}
