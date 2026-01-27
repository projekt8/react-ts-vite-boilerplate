import type { Route } from './+types/404';

import Button from '@/components/Button';

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
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-linear-to-br from-red-50 to-orange-100 dark:from-gray-900 dark:to-red-900">
        <div className="space-y-6 p-8 text-center">
          <h1 className="text-9xl font-bold text-gray-900 dark:text-white">404</h1>
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Button to="/">Go Home</Button>
        </div>
      </div>
    </>
  );
}
