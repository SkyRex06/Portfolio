# Shivam Prasad Portfolio (TanStack Start)

Personal portfolio website built with **TanStack Start (React + TypeScript)**.

## Features
- Projects, experience, hackathons, leadership, and contact sections
- Dynamic project pages via file-based routing (`/projects/$slug`)
- Project detail pages support:
  - GitHub links
  - Demo links
  - Optional YouTube video embeds
  - Image galleries

## Tech Stack
- React + TypeScript
- TanStack Start / TanStack Router
- Vite
- Tailwind CSS

## Getting Started

### 1) Install dependencies
```bash
npm install
```

### 2) Run the development server
```bash
npm run dev
```

### 3) Build for production
```bash
npm run build
```

### 4) Preview production build
```bash
npm run preview
```

## Project Structure (high level)
- `src/routes/` — file-based routes (TanStack Start)
- `src/components/portfolio/` — UI sections for the portfolio
- `src/data/portfolio.ts` — portfolio content (projects, experience, etc.)

## Deploy
You can deploy the built output to any platform that supports **Vite/TanStack Start**.

## License
MIT

