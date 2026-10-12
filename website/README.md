# Tabernacle of Glory Berlin – website

Public website for Grace Foundational Scriptural Ministries International – Tabernacle of Glory Berlin.
The design follows the mockup in `../Context-images/image 1.jpeg`. The mobile app (`../church-app/`) uses the same navy, gold and cream palette.

**Stack:** Next.js 16.4 (App Router, Cache Components), Tailwind CSS v4, lucide-react. Every page is prerendered as static HTML.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Where things live

- `src/lib/site.ts`: church details, navigation, ministries, featured event. Edit content here first.
- `src/app/globals.css`: brand colours and fonts (`@theme`).
- `src/components/`: header, nav, footer, shared sections, UI helpers.
- `src/app/*/page.tsx`: Home, About, Ministries, Discipleship, Events, Media, Give, Contact, Plan Your Visit, plus Privacy, Terms, Impressum and Safeguarding.

## Content sources

- Design: `../Context-images/image 1.jpeg` (also in `../Website Content/Landing page suggestions/`).
- Facts and copy: `../Website Content/Grace_Ministries_Berlin_Complete_Editable_Compilation.docx` (church profile, 8 Oct 2026): contacts, service and prayer times, The Hungry Seekers, ministries.
- Logo: `../Website Content/GFSMI - Logo.png` (6000 px). Web copy in `public/images/logo.png`; tab icons in `src/app/icon.png` and `apple-icon.png`.

## Before launch

Anything shown as a gold `[bracketed]` tag on the site is a placeholder the church must fill in:

- Real photos. The ones in `public/images/` (except the logo) are low-resolution crops from the mockup.
- Social links (`site.social` in `src/lib/site.ts`). Empty links are hidden.
- Leaders' names, photos and biographies (waiting for consent), statement of faith, church story, ministry meeting times, sermons, story video, bank details.
- **Impressum and Datenschutzerklärung** (legally required for German websites). The church profile says the registered name, board and registry entry must be verified from a current Vereinsregister extract first. Do not publish the private postal address (c/o) from the profile.
- Newsletter: the form is not connected to any provider yet and stores nothing.
