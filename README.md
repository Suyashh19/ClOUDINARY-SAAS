# ClOUDINARY-SAAS

[![Deploy](https://img.shields.io/badge/deploy-vercel-000000?style=flat\&logo=vercel)](https://media-vault-omega.vercel.app)

> A Next.js + TypeScript SaaS-style media vault that uploads and serves media using Cloudinary. Includes Prisma ORM for database models and authentication-ready routes so you can run a small media-management/product demo.

---

## Demo

Live demo: [https://media-vault-omega.vercel.app/sign-in](https://media-vault-omega.vercel.app/sign-in)

> If the demo is down or returns an error, please check your environment variables and that the upstream services (database & Cloudinary) are available.

---

## Features

* Upload images, videos and other media to Cloudinary.
* Next.js (app router) + TypeScript codebase.
* Prisma for database schema & migrations.
* Authentication-ready skeleton (configurable to your auth provider of choice).
* Clean UI components and public assets in `/public`.
* Ready for Vercel deployment.

---

## Tech Stack

* Next.js (TypeScript)
* Prisma (Postgres / MySQL / SQLite)
* Cloudinary (media hosting & CDN)
* Tailwind CSS / PostCSS (styles)
* Vercel (recommended hosting)

---

## Getting started (local)

> Tested workflow assumes a UNIX-like shell (macOS / Linux / WSL). Use equivalent PowerShell commands on Windows.

### Prerequisites

* Node.js 18+ (recommended)
* npm, yarn or pnpm
* A database (Postgres / MySQL / or SQLite for quick local testing)
* A Cloudinary account (cloud name, API key, API secret)

### 1. Clone

```bash
git clone https://github.com/Suyashh19/ClOUDINARY-SAAS.git
cd ClOUDINARY-SAAS
```

### 2. Install dependencies

Using npm:

```bash
npm install
```

Or yarn / pnpm:

```bash
yarn install
# or
pnpm install
```

### 3. Environment variables

Create a `.env` file in the project root and add the following (example names — adjust to your provider or environment):

```
# Database (example for Postgres)
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name

# NextAuth / Auth (if used)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=some_long_random_string

# Optional
# VERCEL_URL or other hosting-specific variables when deploying
```

> **Important:** Keep secrets out of source control. Use a secrets manager for production (Vercel env vars, Railway, Render, etc.).

### 4. Prisma setup

If you are using a SQL database (Postgres/MySQL), run migrations and generate the client:

```bash
npx prisma generate
npx prisma migrate dev --name init
```

If you prefer to use SQLite for quick testing, set `DATABASE_URL="file:./dev.db"` and run the same commands.

### 5. Run the dev server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Build & Deploy

Build locally:

```bash
npm run build
npm run start
```

Recommended deployment: Vercel. Create a new Vercel project linked to this repository and set the environment variables in Vercel dashboard. Vercel auto-detects Next.js projects.

---

## Project structure (high level)

```
├─ app/                 # Next.js app router pages & server components
├─ components/          # React components
├─ prisma/              # Prisma schema and migrations
├─ public/              # Static assets (images, icons)
├─ types/               # Shared TypeScript types
├─ package.json
├─ README.md
```

---

## Usage notes

* The UI includes features for uploading media to Cloudinary; check `/components` and server routes to see how uploads are handled.
* If you want to change transformation settings, update client-side upload helpers or Cloudinary URL builder logic.
* For production, enable secure headers and consider using signed uploads or server-side signed upload endpoints.

---

## Environment & Security recommendations

* Never commit your `.env` file.
* Rotate Cloudinary API keys if they are exposed.
* Use signed uploads for untrusted clients to avoid exposing your API secret.
* Use HTTPS in production and set `NEXTAUTH_URL` to your production domain.

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make changes, add tests if appropriate
4. Open a pull request describing your changes

Please keep changes focused and create issues for larger work.

---

## Troubleshooting

* `Upload failures` — check Cloudinary credentials and network connectivity.
* `Prisma errors` — ensure `DATABASE_URL` is correct and run `npx prisma migrate dev`.
* `Type errors` — run `npm run build` locally to surface TypeScript issues.

---

## Credits

Built by **Suyashh19**. This README was generated to provide an easy-to-follow guide for running and extending the project.

---

## License

Specify a license in the repo (e.g., MIT). If you want, add a `LICENSE` file and this badge.

---

If you'd like, I can also:

* Add badges (build, license, coverage)
* Create a short `CONTRIBUTING.md` and `CODE_OF_CONDUCT.md`
* Generate example `.env.example` with the variables listed above
