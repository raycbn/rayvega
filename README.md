# Ray Vega — Personal Portfolio

Personal professional portfolio for Ray Vega.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- Oxlint

## Development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run typecheck
npm run lint
npm run build
npm run preview
```

## Structure

```text
src/
  components/
    layout/
    sections/
    ui/
  lib/
public/
```

Content is currently centralized in `src/lib/data.ts`.
The production build outputs to `dist/`.

## Deployment

The site is intended to be deployed as a static Vite application on Cloudflare.

Current production URL: `https://rayvega.portfolio-81e.workers.dev/`.

A custom domain can be attached later without changing the application routes.
