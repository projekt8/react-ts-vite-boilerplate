import { Link } from 'react-router';
import { Button } from '@/components/Button';
import { NavLink } from '@/components/NavLink';
import IconGitHub from '@/assets/github.svg?react';

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
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <Button
          to="https://github.com/projekt8/react-ts-vite-boilerplate"
          target="_blank"
          rel="noreferrer"
          variant="primary"
          className="px-3 py-1"
        >
          <IconGitHub className="size-5" />
          <span className="sr-only md:not-sr-only">GitHub</span>
        </Button>
      </nav>
    </header>
  );
};
