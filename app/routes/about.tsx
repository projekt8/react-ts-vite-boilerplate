import type { Route } from './+types/about';

import Button from '@/components/Button';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'About' }, { name: 'description', content: 'Learn more about the tech stack' }];
}

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">Under the Hood</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Built with a carefully curated stack of modern technologies to ensure scalability and
            performance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              title: 'React 19',
              desc: 'The library for web and native user interfaces',
              color: 'bg-blue-500',
            },
            {
              title: 'TypeScript',
              desc: 'Strongly typed programming language',
              color: 'bg-blue-600',
            },
            {
              title: 'React Router 7',
              desc: 'Declarative routing for React',
              color: 'bg-red-500',
            },
            {
              title: 'Tailwind CSS 4',
              desc: 'Utility-first CSS framework',
              color: 'bg-sky-400',
            },
            {
              title: 'Vite 7',
              desc: 'Next generation frontend tooling',
              color: 'bg-indigo-500',
            },
          ].map((tech) => (
            <div
              key={tech.title}
              className="group rounded-2xl border border-gray-100/10 bg-gray-900/50 p-6 backdrop-blur-3xl transition-all"
            >
              <div className="mb-3 flex items-center gap-4">
                <span className={`h-3 w-3 rounded-full ${tech.color} ring-4 ring-white`}></span>
                <h3 className="text-xl font-bold text-white transition-colors group-hover:text-indigo-400">
                  {tech.title}
                </h3>
              </div>
              <p className="pl-7 text-gray-400">{tech.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-8">
          <Button to="/" variant="secondary" className="px-8">
            Back to Home
          </Button>
        </div>
      </div>
    </>
  );
}
