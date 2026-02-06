import type { Route } from './+types/home';
import { Container } from '@/components/Container';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Home' },
    { name: 'description', content: 'Welcome to the React 19 Boilerplate' },
  ];
}

export default function HomePage() {
  return (
    <Container className="max-w-3xl text-center">
      <h1>
        Create <span className="text-primary">Beautiful</span> Experiences
      </h1>
      <p>
        A production-ready React 19 boilerplate crafted with Vite, React Router, TypeScript, and
        Tailwind CSS v4. Optimized for performance and developer experience.
      </p>
    </Container>
  );
}
