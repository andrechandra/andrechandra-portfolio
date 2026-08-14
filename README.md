# andrechandra.dev

Portfolio and resume for Andre Chandra Putra, fullstack software engineer.

Live at **[andrechandra.dev](https://andrechandra.dev)**.

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS · deployed on Vercel.

---

## The one thing to know

**All content lives in [`content/`](content/) and nothing else duplicates it.**

One edit to `content/experience.ts` updates, in the same build:

- the homepage timeline
- the `/resume` page
- the resume PDF
- the JSON-LD `Person` graph
- the generated Open Graph cards

`content/**` may not import from `react`, `next`, or any bundler-resolved asset.
That constraint is what lets the same modules feed React Server Components, a
plain-Node PDF script, and the OG image generator. Icons are referenced by
**name** and resolved through [`components/icons`](components/icons/); images are
referenced by **path string**.

| File | Holds |
|---|---|
| `content/profile.ts` | Name, title, email, location, positioning line, long bio |
| `content/availability.ts` | Open/closed, employment types, work arrangements, timezone, overlap windows, hiring channels |
| `content/experience.ts` | Every role, with bullets |
| `content/education.ts`, `content/skills.ts`, `content/socials.ts` | Self-explanatory |
| `content/proof.ts` | The credibility bar under the hero |
| `content/site.ts` | Canonical domain, nav, sitemap routes |
| `content/schema.ts` | Zod schemas; the single type source |

### Surfaces

Any list entry can declare where it appears. Omitting `surfaces` means
"everywhere", and array order is display order.

```ts
type Surface = 'home' | 'resume' | 'pdf'

{ id: 'cv-atm', /* ... */ surfaces: ['resume'] }   // web only, off the PDF
```

This is how the homepage shows three roles, `/resume` shows six, and the PDF
stays on one page.

### Resume bullets vs web bullets

One canonical string with an optional shorter override, rather than two copies
that drift apart:

```ts
{
  text: 'Leads architecture and delivery of the v2 dashboard on Next.js, TypeScript and Supabase, owning decisions from database schema to interface.',
  pdf:  'Leads architecture and delivery of the v2 dashboard on Next.js, TypeScript and Supabase.',
}
```

`pdf: false` drops a bullet from print entirely. Zod caps `pdf` at 170
characters because a longer one wrecks pagination, and that cap is a build
failure, not a surprise.

---

## Commands

```bash
pnpm install
pnpm dev              # generates the PDF, then starts the dev server
pnpm build            # validate content -> build PDF -> next build
pnpm test             # vitest
pnpm lint             # eslint
pnpm typecheck        # tsc --noEmit
pnpm content:validate # zod validation on its own
pnpm pdf              # regenerate the resume PDF only
```

`node scripts/optimize-media.mjs [--dry]` converts screenshots in
`public/projects/` to WebP at sane resolutions. Run it after adding images.

---

## Resume PDF

Generated at **build time** by
[`scripts/build-resume-pdf.tsx`](scripts/build-resume-pdf.tsx) using
`@react-pdf/renderer`, and written to `public/andre-chandra-putra-resume.pdf`.

The output is gitignored: regenerating on every build makes a stale PDF
structurally impossible, and a generator error fails the build rather than
shipping an old file. Because it is a static file on the CDN, the download is
instant with no serverless cold start.

It is served `Content-Disposition: inline` so it previews in the browser, but
saves under a filename that files correctly in an applicant tracking system.

### Constraints the layout encodes

Single column (multi-column resumes interleave into garbage in older ATS), all
text inside `<Text>` (nothing baked into images), real `<Link>` annotations, and
section headings spelled exactly `Experience` / `Skills` / `Education`. Section
headings carry **no letter-spacing**, because tracking makes text extractors emit
`E X P E R I E N C E` and the parser stops recognising the keyword.

### Swapping the design

Write `components/resume-pdf/layout-custom.tsx` and change one import in
`scripts/build-resume-pdf.tsx`. `ResumeDoc`
([`lib/resume/to-resume-doc.ts`](lib/resume/to-resume-doc.ts)) is the contract
between data and layout, so `content/` never changes. Colours, spacing and the
type scale live in [`components/resume-pdf/theme.ts`](components/resume-pdf/theme.ts).

---

## Architecture notes

**Server components by default.** The only client islands are the nav links
(active state), the mobile menu, the copy-email button, the gallery lightbox and
the terminal. The terminal is loaded with `next/dynamic` below the fold.

**Motion is CSS-only.** [`components/ui/reveal.tsx`](components/ui/reveal.tsx)
is a server component that emits a class; the animation lives behind
`@supports (animation-timeline: view())` and
`@media (prefers-reduced-motion: no-preference)`. Content is visible by default
and the animation is purely additive, so a failed script or an unsupported
browser shows the finished state rather than a blank page.

**Dialogs are native.** The mobile menu and the lightbox use `<dialog>` with
`showModal()`, which supplies focus trapping, Escape-to-close, background
inertness and focus restoration without a library.

**OG cards are generated.** `app/**/opengraph-image.tsx` render through
`next/og` at build time from `content/`, so a change to the job title or
availability updates every social card. Satori supports a flexbox subset only
(no grid) and needs TTF/OTF/**WOFF** font buffers, never WOFF2.

---

## Deployment

See [docs/deployment.md](docs/deployment.md), including the `noindex`
configuration that `v1.andrechandra.dev` must carry.

## License

MIT. See [LICENSE](LICENSE).
