import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home" },
    { name: "description", content: "Welcome to the React 19 Boilerplate" },
  ];
}

export default function HomePage() {
  return (
    <>
      <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-white dark:bg-gray-950 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-grid-slate-100 mask-[linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:mask-[linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob will-change-transform dark:bg-purple-900 dark:mix-blend-normal"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000 will-change-transform dark:bg-indigo-900 dark:mix-blend-normal"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000 will-change-transform dark:bg-pink-900 dark:mix-blend-normal"></div>

        <div className="relative z-10 text-center space-y-8 p-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 dark:text-indigo-50 tracking-tight leading-tight">
              Create{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                Beautiful
              </span>{" "}
              Experiences
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              A production-ready React 19 boilerplate crafted with Vite,
              TypeScript, and Tailwind CSS v4. Optimized for performance and
              developer experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
