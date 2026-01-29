export default function Footer() {
  return (
    <footer className="border-t border-gray-200/10 bg-gray-50 py-12 backdrop-blur-3xl dark:bg-gray-900/50">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4 font-serif text-lg text-gray-700 dark:text-gray-300">
          Built with modern standards.
        </p>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {new Date().getFullYear()} React Boilerplate. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
