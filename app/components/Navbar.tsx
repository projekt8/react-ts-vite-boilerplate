import { Link } from 'react-router';
import Button from '@/components/Button';

export const Navbar = () => {
  return (
    <header className="relative z-10 flex h-16 items-center justify-between px-4 md:px-8">
      <Link
        to="/"
        className="text-primary -mt-1 font-serif text-xl leading-none font-bold tracking-tight md:text-2xl"
      >
        Boilerplate.
      </Link>
      <nav className="flex items-center gap-4 font-medium md:gap-8">
        <Button to="/" variant="tertiary">
          Home
        </Button>
        <Button to="/about" variant="tertiary">
          About
        </Button>
        <Button
          to="https://projekt8.github.io/react-ts-vite-boilerplate"
          target="_blank"
          rel="noreferrer"
          variant="primary"
          className="px-3 py-1"
        >
          GitHub
        </Button>
      </nav>
    </header>
  );
};
