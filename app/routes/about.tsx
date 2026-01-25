import type { Route } from "./+types/about";

import Button from "@/components/Button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About" },
    { name: "description", content: "Learn more about the tech stack" },
  ];
}

export default function AboutPage() {
  return (
    <>
      <div className="min-h-[calc(100vh-4rem)] bg-white dark:bg-gray-950 py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white">
              Under the Hood
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Built with a carefully curated stack of modern technologies to
              ensure scalability and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Vite 7",
                desc: "Next generation frontend tooling",
                color: "bg-indigo-500",
              },
              {
                title: "React 19",
                desc: "The library for web and native user interfaces",
                color: "bg-blue-500",
              },
              {
                title: "TypeScript",
                desc: "Strongly typed programming language",
                color: "bg-blue-600",
              },
              {
                title: "Tailwind CSS 4",
                desc: "Utility-first CSS framework",
                color: "bg-sky-400",
              },
              {
                title: "React Router 7",
                desc: "Declarative routing for React",
                color: "bg-red-500",
              },
              {
                title: "Vitest",
                desc: "Blazing fast unit testing",
                color: "bg-yellow-500",
              },
            ].map((tech) => (
              <div
                key={tech.title}
                className="group p-6 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 hover:border-indigo-100 dark:hover:border-indigo-900/50 transition-all hover:shadow-lg"
              >
                <div className="flex items-center gap-4 mb-3">
                  <span
                    className={`w-3 h-3 rounded-full ${tech.color} ring-4 ring-white dark:ring-gray-900`}
                  ></span>
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {tech.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 pl-7">
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-8">
            <Button to="/" variant="secondary" className="px-8">
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
