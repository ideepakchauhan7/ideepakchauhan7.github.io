# Deepak Chauhan Portfolio

## About
This repository contains the source for Deepak Chauhan's personal portfolio at `ideepakchauhan7.github.io`.

The site is designed as a single-page portfolio that brings together:

- open source contributions
- machine learning internship work
- systems and finance-focused projects
- technical skills, achievements, certifications, and contact details

The content is driven from the updated resume and presented through a modern Next.js interface with a custom visual system inspired by shadcn/ui and Magic UI patterns.

## Live Site
- Portfolio: `https://ideepakchauhan7.github.io`
- Resume link: Google Drive URL configured in `lib/site-data.ts`

## Stack
- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS
- shadcn-style UI primitives
- Motion-based UI effects inspired by Magic UI
- GitHub Actions for GitHub Pages deployment

## What The Site Includes
- Hero and profile summary
- Open source contribution showcase
- Project spotlight section
- Experience and education cards
- Skills, achievements, and certifications
- Contact section with direct actions

## Development
Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Lint the project:

```bash
npm run lint
```

Build the static export used by GitHub Pages:

```bash
npm run build
```

## Deployment
The repository includes a GitHub Pages workflow at `.github/workflows/deploy.yml`.

When changes are merged into `main`, GitHub Actions:

1. installs dependencies with `npm ci`
2. builds the portfolio
3. uploads the generated `out/` folder
4. deploys the static site to GitHub Pages

## Project Structure
- `app/` contains the main Next.js pages and global styles
- `components/portfolio/` contains portfolio-specific sections such as the hero, projects, and marquee
- `components/ui/` contains reusable UI primitives
- `lib/site-data.ts` stores the portfolio content and the resume URL
- `public/resume/` stores resume-related assets used by the site

## Updating Content
Most portfolio content can be updated from a single place:

- edit `lib/site-data.ts` for skills, projects, contributions, achievements, certifications, contact information, and the external resume link
- edit `public/resume/` if you want to replace or regenerate the printable resume assets
- edit `components/portfolio/` when you want to change section layout or presentation

## Validation
The current project workflow uses:

- `npm run lint`
- `npm run build`

These checks are a good default before opening a PR or merging changes into `main`.
