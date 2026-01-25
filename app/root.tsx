import "./styles/index.css";

import interFont from "@fontsource-variable/inter/files/inter-latin-wght-normal.woff2?url";
import playfairFont from "@fontsource-variable/playfair-display/files/playfair-display-latin-wght-normal.woff2?url";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "react-router";
import type { Route } from "./+types/root";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const links: Route.LinksFunction = () => [
  {
    rel: "preload",
    href: interFont,
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    href: playfairFont,
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
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
      <body>
        <div className="flex flex-col min-h-screen font-sans antialiased text-foreground dark:text-foreground-dark bg-background dark:bg-background-dark transition-colors duration-300">
          <Navbar />

          <main className="grow">{children}</main>

          <Footer />
        </div>
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
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-red-50 dark:bg-red-900/10 p-4 font-sans">
      <div className="text-center max-w-md">
        <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">
          {message}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{details}</p>
        {stack && (
          <pre className="w-full p-4 overflow-x-auto text-xs text-left bg-black/10 text-red-800 dark:text-red-200 rounded mb-6">
            <code>{stack}</code>
          </pre>
        )}
        <a
          href="/"
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors inline-block"
        >
          Go Home
        </a>
      </div>
    </main>
  );
}
