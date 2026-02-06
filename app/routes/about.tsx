import type { Route } from './+types/about';
import { Container } from '@/components/Container';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'About' }, { name: 'description', content: 'Learn more about the tech stack' }];
}

export default function AboutPage() {
  return (
    <Container className="max-w-3xl space-y-8">
      <div className="text-center">
        <h1>Under the Hood</h1>
        <p>
          Built with a carefully curated stack of modern technologies to ensure scalability and
          performance.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {[
          {
            title: 'React 19',
            desc: 'The library for web and native user interfaces',
          },
          {
            title: 'TypeScript',
            desc: 'Strongly typed programming language',
          },
          {
            title: 'React Router 7',
            desc: 'Declarative routing for React',
          },
          {
            title: 'Tailwind CSS 4',
            desc: 'Utility-first CSS framework',
          },
          {
            title: 'Vite 7',
            desc: 'Next generation frontend tooling',
          },
        ].map((tech) => (
          <div
            key={tech.title}
            className="group border-secondary-100/50 rounded-2xl border bg-black/50 p-6 backdrop-blur-3xl transition-all"
          >
            <h2 className="text-primary mb-2 font-sans text-xl">{tech.title}</h2>
            <p>{tech.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
