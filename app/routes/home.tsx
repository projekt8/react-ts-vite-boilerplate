import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Home' },
    { name: 'description', content: 'Welcome to the React 19 Boilerplate' },
  ];
}

export default function HomePage() {
  return (
    <>
      <div className="relative z-10 mx-auto max-w-4xl space-y-8 p-8 text-center">
        <div className="space-y-4">
          <h1 className="font-serif text-5xl leading-tight font-bold tracking-tight text-indigo-50 md:text-7xl">
            Create{' '}
            <span className="bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Beautiful
            </span>{' '}
            Experiences
          </h1>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-300">
            A production-ready React 19 boilerplate crafted with Vite, TypeScript, and Tailwind CSS
            v4. Optimized for performance and developer experience.
          </p>
        </div>
      </div>
    </>
  );
}
