# Deployment

## Production: andrechandra.dev

Single Vercel project tracking `main`.

`pnpm build` runs three steps in order, and any of them failing fails the deploy:

1. `tsx scripts/validate-content.ts` - zod validation of everything in `content/`
2. `tsx scripts/build-resume-pdf.tsx` - writes `public/andre-chandra-putra-resume.pdf`
3. `next build`

The PDF is **gitignored on purpose**. Regenerating it on every deploy makes a stale
resume structurally impossible: if the generator throws, nothing ships.

### Environment

No environment variables are required. The canonical domain lives in
[content/site.ts](../content/site.ts) (`site.url`), which feeds `metadataBase`,
the sitemap, `robots.txt`, every canonical tag, and the JSON-LD graph. Changing
domains is a one-line edit there.

---

## Legacy: v1.andrechandra.dev

The previous site should stay reachable but **must not be indexed**. Without a
`noindex`, it serves a near-duplicate of the same content under a second
hostname, which splits ranking signals and confuses anyone who lands on it from
a search result.

### Steps

1. **Create the branch** from the last pre-rebuild commit:

   ```bash
   git branch v1 f6e6440
   git push origin v1
   ```

2. **Add the noindex config to that branch only.** Check out `v1` and replace
   its `next.config.ts` `headers()` with:

   ```ts
   async headers() {
     return [
       {
         source: '/:path*',
         headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
       },
     ]
   },
   ```

   and add `public/robots.txt`:

   ```
   User-agent: *
   Disallow: /
   ```

   Belt and braces on purpose: the header covers assets and non-HTML responses,
   `robots.txt` covers crawlers that never request a page. Do **not** rely on a
   canonical tag pointing at production; canonicals are a hint, `noindex` is a
   directive.

3. **Create a second Vercel project** from the same repository:
   - Production branch: `v1`
   - Domain: `v1.andrechandra.dev`
   - Leave the `main` project's domains untouched

4. **Verify:**

   ```bash
   curl -sI https://v1.andrechandra.dev/ | grep -i x-robots-tag   # noindex, nofollow
   curl -s  https://v1.andrechandra.dev/robots.txt                # Disallow: /
   curl -sI https://andrechandra.dev/ | grep -i x-robots-tag      # (nothing)
   ```

   The last check matters: if the production site ever grows an `X-Robots-Tag:
   noindex`, it disappears from Google entirely.

---

## Post-deploy checklist

Run once after the first production deploy:

- [ ] Google Search Console: submit `https://andrechandra.dev/sitemap.xml`
- [ ] Search Console: request indexing for `/` and `/resume`
- [ ] Confirm `/experiences` reports as a redirect and `/unused_blog/*` as Gone
- [ ] LinkedIn [Post Inspector](https://www.linkedin.com/post-inspector/): paste
      `/`, `/resume` and `/projects/brokerid`, confirm the generated card renders
- [ ] [Rich Results Test](https://search.google.com/test/rich-results): zero
      errors on `/`, `/resume`, `/projects/brokerid`
- [ ] Open the resume PDF, `Cmd+F` for "Supabase" to confirm selectable text
- [ ] Run the PDF through an ATS parser (Jobscan or Resume Worded) and confirm
      Experience / Skills / Education land in the right buckets

## Routes that must keep behaving

| URL | Expected |
|---|---|
| `/experiences`, `/experiences/*` | 308 to `/resume` |
| `/design` | 308 to `/` |
| `/projects/typra`, `/projects/cvatm` | 308 to `/projects` |
| `/cv`, `/resume.pdf`, `/AndreChandraPutra_CV_2026.pdf` | 308 to the generated PDF |
| `/unused_blog/*`, `/blog/*` | 410 Gone |
| anything else unknown | 404 (not 200) |

CI asserts the domain and `public/` size; the redirect matrix is checked by hand
after a deploy.
