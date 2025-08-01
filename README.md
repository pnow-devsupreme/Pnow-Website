# PNOW Website v1

A modern, production-ready web application built with **Next.js**, **TypeScript**, and **Tailwind CSS**. This repository provides the source code for the PNOW website, featuring a scalable architecture, reusable components, and strong developer tooling.

## About the Website

**ProficientNow (PNOW)** is a recruitment and talent solutions company founded in June 2021. The website serves as a digital platform to connect employers with top-tier talent and empower job seekers to find rewarding opportunities across diverse industries including IT, Legal, Construction, Architecture, Mechanical, and Manufacturing.

- **Our Journey:** Since inception, ProficientNow has revolutionized recruitment by providing bespoke hiring solutions and seamless connections between employers and talent. Operations span the US, Australia, and India, with plans for further global expansion.
- **Mission:** Deliver high-quality recruitment services, support clients with executive solutions, and become a global leader in talent acquisition.
- **Vision:** Bridge the gap between industry and talent using automated technology, supporting employers and guiding employees to the right career paths with rewarding benefits.
- **Values:** Transparency, trust, high focus, and goal orientation are at the core of our work. The team operates with positive reinforcement and SMART objectives.
- **Global Presence:** With offices in the US, Australia, and India, PNOW is committed to community impact and driving recruitment excellence worldwide.

The website showcases company values, services, and global reach, and enables employers and job seekers to connect efficiently through a modern, user-friendly interface.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- ⚡️ Next.js 14 (App Router)
- 🦾 TypeScript
- 🎨 Tailwind CSS for styling
- 🧩 Modular component architecture
- 🧪 Jest & Testing Library for testing
- 🛡️ ESLint, Prettier, Husky, Commitlint for code quality
- 🌐 SEO and sitemap support

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Jest](https://jestjs.io/)
- [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/), [Commitlint](https://commitlint.js.org/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or above recommended)
- [pnpm](https://pnpm.io/) (or npm/yarn)

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

### Production Build

```bash
pnpm build
pnpm start
```

### Linting & Formatting

```bash
pnpm lint
pnpm format
```

### Running Tests

```bash
pnpm test
```

## Project Structure

```
├── public/               # Static assets
├── src/
│   ├── app/              # Next.js app directory (routes, layouts, pages)
│   ├── components/       # Reusable UI components
│   ├── styles/           # Global and component styles
│   └── ...
├── package.json          # Project metadata and scripts
├── tailwind.config.ts    # Tailwind CSS configuration
├── next.config.js        # Next.js configuration
└── ...
```
