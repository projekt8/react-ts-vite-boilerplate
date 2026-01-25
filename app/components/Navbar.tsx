import { Link } from 'react-router';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 dark:border-gray-800/80 bg-background/80 dark:bg-background-dark/80 backdrop-blur-md supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-serif font-bold text-primary dark:text-indigo-400 tracking-tight">
            Boilerplate.
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-primary dark:hover:text-indigo-400 transition-colors">
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-primary dark:hover:text-indigo-400 transition-colors"
          >
            About
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-foreground text-background dark:bg-foreground-dark dark:text-background-dark rounded-full hover:opacity-90 transition-opacity"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
