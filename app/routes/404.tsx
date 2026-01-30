import type { Route } from './+types/404';

import { Button } from '@/components/Button';

export function meta({}: Route.MetaArgs) {
  return [
    { title: '404 Not Found' },
    {
      name: 'description',
      content: 'The page you are looking for does not exist.',
    },
  ];
}

export default function NotFoundPage() {
  return (
    <div className="space-y-6 text-center">
      <div>
        <h1 className="text-error text-8xl">
          404
          <small className="mt-4 block text-4xl text-white">Page Not Found</small>
        </h1>
      </div>
      <p>The page you are looking for doesn't exist or has been moved.</p>
      <Button to="/">Go Home</Button>
    </div>
  );
}
