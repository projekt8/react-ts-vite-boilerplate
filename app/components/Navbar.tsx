import { Link } from 'react-router';

export default function Navbar() {
  return (
    <header className="bg-background/80 dark:bg-background-dark/80 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full border-b border-gray-200/80 backdrop-blur-md dark:border-gray-800/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-primary font-serif text-2xl font-bold tracking-tight dark:text-indigo-400">
            Boilerplate.
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-primary transition-colors dark:hover:text-indigo-400">
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-primary transition-colors dark:hover:text-indigo-400"
          >
            About
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="bg-foreground text-background dark:bg-foreground-dark dark:text-background-dark rounded-full px-4 py-2 transition-opacity hover:opacity-90"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
