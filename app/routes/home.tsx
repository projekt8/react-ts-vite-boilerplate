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
      <div className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden bg-white dark:bg-gray-950">
        {/* Background Gradients */}
        <div className="bg-grid-slate-100 dark:bg-grid-slate-700/25 absolute inset-0 mask-[linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:mask-[linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
        <div className="animate-blob absolute top-0 -left-4 h-72 w-72 rounded-full bg-purple-300 opacity-30 mix-blend-multiply blur-2xl filter will-change-transform dark:bg-purple-900 dark:mix-blend-normal"></div>
        <div className="animate-blob animation-delay-2000 absolute top-0 -right-4 h-72 w-72 rounded-full bg-indigo-300 opacity-30 mix-blend-multiply blur-2xl filter will-change-transform dark:bg-indigo-900 dark:mix-blend-normal"></div>
        <div className="animate-blob animation-delay-4000 absolute -bottom-8 left-20 h-72 w-72 rounded-full bg-pink-300 opacity-30 mix-blend-multiply blur-2xl filter will-change-transform dark:bg-pink-900 dark:mix-blend-normal"></div>

        <div className="relative z-10 mx-auto max-w-4xl space-y-8 p-8 text-center">
          <div className="space-y-4">
            <h1 className="font-serif text-5xl leading-tight font-bold tracking-tight text-gray-900 md:text-7xl dark:text-indigo-50">
              Create{' '}
              <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
                Beautiful
              </span>{' '}
              Experiences
            </h1>
            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-600 dark:text-gray-300">
              A production-ready React 19 boilerplate crafted with Vite, TypeScript, and Tailwind
              CSS v4. Optimized for performance and developer experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
