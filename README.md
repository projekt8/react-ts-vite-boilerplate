# React TS Vite Boilerplate

A modern, high-performance web application boilerplate built with **React 19**, **Vite 7**, **TypeScript**, and **Tailwind CSS v4**.

## 🚀 Features

- **⚡ Vite 7**: Next-generation frontend tooling with instant server start and lightning-fast HMR.
- **⚛️ React 19**: Leveraging the latest React features including robust concurrent rendering.
- **📘 TypeScript**: Fully typed codebase for better developer experience and code reliability.
- **🎨 Tailwind CSS v4**: Utility-first CSS framework with the latest engine and features.
- **🚦 React Router v7**: Declarative, nesting-capable routing.
- **👮 Code Quality**: ESLint, Prettier, Husky, and Lint-staged configured for consistent code style.
- **🔍 SEO**: Built-in metadata management.
- **📦 Path Aliases**: Pre-configured `@/` alias for clean imports.

## 🛠️ Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or pnpm

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    cd react-ts-vite-boilerplate
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Start the development server:

    ```bash
    npm run dev
    ```

4.  Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📜 Available Scripts

| Script              | Description                                   |
| :------------------ | :-------------------------------------------- |
| `npm run dev`       | Starts the development server with HMR.       |
| `npm run build`     | Builds the application for production.        |
| `npm run start`     | Starts the production server.                 |
| `npm run typecheck` | Runs TypeScript type checking.                |
| `npm run lint`      | Runs ESLint to check for code quality issues. |
| `npm run lint:fix`  | Automatically fixes simple linting errors.    |
| `npm run format`    | Formats code with Prettier.                   |
| `npm run prepare`   | Sets up Husky git hooks (automatic).          |

## 📂 Project Structure

```text
app/
├── components/         # Reusable UI components
│   ├── Button.tsx
│   ├── Footer.tsx
│   └── Navbar.tsx
├── lib/                # Utility functions and shared logic
│   └── utils.ts
├── routes/             # Page components
│   ├── 404.tsx
│   ├── about.tsx
│   └── home.tsx
├── styles/             # Global styles and theme configuration
│   ├── fonts.css       # Font imports and definitions
│   ├── index.css       # Tailwind imports
│   └── theme.css       # CSS variables and theme tokens
├── root.tsx            # Root layout with HTML structure
└── routes.ts           # Route configuration
```

## 🧩 Usage Guide

### Routing

This project uses **React Router v7** with file-based route configuration. Define your routes in `app/routes.ts`.

```tsx
// app/routes.ts
import { index, route, type RouteConfig } from '@react-router/dev/routes';

export default [index('routes/home.tsx'), route('about', 'routes/about.tsx')] satisfies RouteConfig;
```

## 🚀 Deployment

### GitHub Pages

This project includes a GitHub Actions workflow to automatically deploy to GitHub Pages.

1.  **Push to main**: The workflow triggers on every push to the `main` branch.
2.  **Enable GitHub Pages**:
    - Go to your repository **Settings**.
    - Click on **Pages** in the sidebar.
    - Under **Build and deployment > Source**, select **GitHub Actions**.
3.  **Verify**: Once the action completes, your site will be deployed to the URL provided in the Actions tab.

The workflow automatically sets the correct base path for your repository. If you are using a custom domain, you might need to adjust `BASE_PATH` in `.github/workflows/deploy.yml`.

## ⚙️ Configuration

- **Vite**: `vite.config.ts` is configured with React Router, Tailwind CSS v4, and path aliasing (`@/`).
- **TypeScript**: `tsconfig.json` follows strict mode.
- **Linting**: Controlled by `eslint.config.ts`.

## 🤝 Contributing

1.  Create a feature branch (`git checkout -b feature/amazing-feature`).
2.  Commit your changes (`git commit -m 'Add some amazing feature'`).
3.  Push to the branch (`git push origin feature/amazing-feature`).
4.  Open a Pull Request.

---

Built with ❤️ using [Vite](https://vitejs.dev/) and [React Router](https://reactrouter.com/).
