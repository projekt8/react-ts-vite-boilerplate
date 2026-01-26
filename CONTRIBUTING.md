# Contributing to codebase

Thank you for your interest in contributing! This document provides guidelines for working on this project.

## Development Workflow

1.  **Fork and Clone**: Fork the repository and clone it locally.
2.  **Install**: Run `npm install` to set up dependencies.
3.  **Branching**: Create a feature branch for your work (`git checkout -b feature/my-feature`).
4.  **Develop**: Write your code following the standards below.
5.  **Lint**: Run `npm run lint` to check for style issues.
6.  **Commit**: Use conventional commit messages.
7.  **Push**: Push to your fork and open a Pull Request.

## Code Style & Standards

### Architecture & Components

- **Functional Components**: Use React hooks and functional components exclusively.
- **Naming**: Prefer named exports `export function ComponentName() {}`.
- **Props Interface**: Use strictly typed props (interface `ComponentProps` or `ComponentNameProps`).
- **State Management**:
  - `useState` for local component state.
  - `Context` or global stores for shared state.
  - Avoid deep prop drilling.

### TypeScript

- **Strict Typing**: All code must be fully typed. **NO** `any` type usage; use `unknown` if widely generic.
- **Type Definitions**: Use `type` for simple unions/aliases and `interface` for object structures.

### Styling

- **Tailwind CSS**: Use utility classes for styling. Avoid inline styles.
- **Theme**: Utilize variables from `app/styles/theme.css` via Tailwind config.
- **Responsiveness**: Mobile-first approach using standard breakpoints.
- **Class Utilities**: Use `clsx` or `tailwind-merge` for conditional class names.

## AI & LLM Guidelines

This section specifically guides AI assistants working on this project.

1.  **Context Awareness**: Always check `package.json` for dependency versions (React 19, Vite 7, etc.) before suggesting code.
2.  **Conciseness**: Provide code solutions directly. Avoid over-explanation of standard React patterns.
3.  **Imports**: Always start with absolute imports `@/` where applicable.
4.  **Best Practices**:
    - Prioritize modern React 19 features where stable.
    - Ensure all generated components include necessary imports.
    - Verify strict type safety in generated code.

## Project Structure

- `app/components`: Reusable, generic UI components.
- `app/routes`: Components that represent full pages/routes.
- `app/lib`: Logic and utilities independent of UI.
- `app/styles`: Global styles and theme configuration.

## commit messages

Please follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: formatting, missing semi colons, etc; no code change
- `refactor`: Refactoring production code
- `test`: Adding tests, refactoring tests
- `chore`: Updating build tasks, package manager configs, etc

---

_This file is also used by AI assistants to understand the project's contribution standards._
