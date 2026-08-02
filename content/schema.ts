import { z } from 'zod'

/**
 * Schemas for everything in `content/`.
 *
 * Types are derived with `z.infer` so there is exactly one definition per
 * concept. Application code imports the *types* (`import type`), which
 * TypeScript erases, so zod stays a devDependency and never reaches the client
 * bundle. Validation runs in `scripts/validate-content.ts` and in the PDF
 * builder.
 *
 * The value zod adds over plain TypeScript is the invariants TS cannot express:
 * URL validity, chronological ordering, id uniqueness, and bullet length caps.
 * That last one matters most: an over-long bullet silently wrecks PDF
 * pagination, and a `.max()` turns it into a build failure.
 */

/* -------------------------------------------------------------------------- */
/* Surfaces                                                                    */
/* -------------------------------------------------------------------------- */

/**
 * Where a piece of content is allowed to appear.
 * Omitting `surfaces` means "everywhere". Array order is display order.
 */
export const surfaceSchema = z.enum(['home', 'resume', 'pdf'])
export type Surface = z.infer<typeof surfaceSchema>

const surfaces = z.array(surfaceSchema).nonempty().optional()

/**
 * Predicate for `.filter()`. Absent `surfaces` means the item is universal.
 *
 * `T` is intentionally unconstrained: entries that never declare `surfaces`
 * (education, most skill groups) would otherwise fail TypeScript's
 * "no properties in common" check against a `{ surfaces?: ... }` constraint.
 */
export function on<T>(surface: Surface) {
  return (item: T): boolean => {
    const declared = (item as T & { surfaces?: readonly Surface[] }).surfaces
    return declared === undefined || declared.includes(surface)
  }
}

/* -------------------------------------------------------------------------- */
/* Primitives                                                                  */
/* -------------------------------------------------------------------------- */

/** `YYYY-MM`, or the literal `present` for ongoing roles. */
const yearMonth = z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/, {
  message: 'Expected YYYY-MM',
})
const endDate = z.union([yearMonth, z.literal('present')])

/** Sort key: `present` always sorts last (most recent). */
export function dateKey(value: string): number {
  if (value === 'present') return Number.MAX_SAFE_INTEGER
  const [year, month] = value.split('-').map(Number)
  return year * 12 + month
}

/**
 * One achievement line.
 *
 * `text` is canonical and is what the web renders. `pdf` narrows it for print
 * (a recruiter gives the PDF roughly seven seconds and an ATS parses linearly,
 * so PDF bullets want to be short and metric-first), or `false` drops it from
 * print entirely. Keeping one canonical string with a targeted override is what
 * prevents the copy drift that currently exists between the PDF, /experiences
 * and the terminal.
 */
export const bulletSchema = z.object({
  text: z.string().min(10).max(260),
  pdf: z.union([z.string().min(10).max(170), z.literal(false)]).optional(),
  tags: z.array(z.string()).optional(),
})
export type Bullet = z.infer<typeof bulletSchema>

/** Resolve a bullet for a surface. Returns null when it is print-suppressed. */
export function bulletFor(bullet: Bullet, surface: Surface): string | null {
  if (surface !== 'pdf') return bullet.text
  if (bullet.pdf === false) return null
  return bullet.pdf ?? bullet.text
}

/* -------------------------------------------------------------------------- */
/* Profile                                                                     */
/* -------------------------------------------------------------------------- */

export const profileSchema = z.object({
  name: z.string(),
  shortName: z.string(),
  alternateName: z.string().optional(),
  /** The single job title used site-wide. Never restate it inline. */
  title: z.string(),
  email: z.email(),
  phone: z.string().optional(),
  location: z.object({
    city: z.string(),
    region: z.string(),
    country: z.string(),
    countryCode: z.string().length(2),
  }),
  /** One or two sentences. Used in the hero and as meta description input. */
  positioning: z.string().min(40).max(320),
  /** Longer story for /about. Plain paragraphs. */
  bio: z.array(z.string().min(40)).nonempty(),
  photo: z.string().startsWith('/'),
})
export type Profile = z.infer<typeof profileSchema>

/* -------------------------------------------------------------------------- */
/* Availability                                                                */
/* -------------------------------------------------------------------------- */

/**
 * The highest-leverage object on the site.
 *
 * For an Indonesia-based engineer applying to US and EU companies, the two
 * objections that kill a lead before a reply are timezone overlap and "can we
 * legally pay this person". Both are answered above the fold.
 */
export const availabilitySchema = z.object({
  status: z.enum(['open', 'selectively-open', 'not-looking']),
  headline: z.string().max(80),
  employmentTypes: z.array(z.enum(['full-time', 'contract'])).nonempty(),
  workArrangement: z.literal('remote'),
  timezone: z.object({
    iana: z.string(),
    label: z.string(),
    overlapNote: z.string(),
  }),
  overlapWindows: z
    .array(z.object({ region: z.string(), hours: z.string() }))
    .nonempty(),
  engagement: z.object({
    viaEOR: z.boolean(),
    contractorReady: z.boolean(),
    note: z.string().optional(),
  }),
  languages: z.array(z.string()).nonempty(),
  /** Drives the visible "updated" stamp, sitemap lastmod and JSON-LD. */
  updatedAt: z.iso.date(),
})
export type Availability = z.infer<typeof availabilitySchema>

/* -------------------------------------------------------------------------- */
/* Experience                                                                  */
/* -------------------------------------------------------------------------- */

export const engagementSchema = z.enum([
  'full-time',
  'venture',
  'internship',
  'freelance',
  'volunteer',
])
export type Engagement = z.infer<typeof engagementSchema>

export const experienceSchema = z
  .object({
    id: z.string().min(1),
    role: z.string().min(2),
    organization: z.string().min(2),
    organizationUrl: z.url().optional(),
    location: z.string().min(2),
    engagement: engagementSchema,
    arrangement: z.enum(['on-site', 'hybrid', 'remote']).optional(),
    startDate: yearMonth,
    endDate,
    /** One line of context shown above the bullets on the web. */
    summary: z.string().max(220).optional(),
    bullets: z.array(bulletSchema).nonempty(),
    stack: z.array(z.string()).optional(),
    surfaces,
  })
  .refine((entry) => dateKey(entry.endDate) >= dateKey(entry.startDate), {
    message: 'endDate must not precede startDate',
    path: ['endDate'],
  })
export type Experience = z.infer<typeof experienceSchema>

/* -------------------------------------------------------------------------- */
/* Education                                                                   */
/* -------------------------------------------------------------------------- */

export const educationSchema = z.object({
  id: z.string().min(1),
  institution: z.string(),
  institutionUrl: z.url().optional(),
  degree: z.string(),
  location: z.string().optional(),
  startDate: yearMonth,
  endDate,
  grade: z.string().optional(),
  highlights: z.array(z.string()).optional(),
  surfaces,
})
export type Education = z.infer<typeof educationSchema>

/* -------------------------------------------------------------------------- */
/* Skills                                                                      */
/* -------------------------------------------------------------------------- */

export const skillGroupSchema = z.object({
  id: z.string().min(1),
  label: z.string(),
  items: z.array(z.string()).nonempty(),
  surfaces,
})
export type SkillGroup = z.infer<typeof skillGroupSchema>

/* -------------------------------------------------------------------------- */
/* Socials                                                                     */
/* -------------------------------------------------------------------------- */

/** Icons are referenced by name and resolved through a component registry, so
 *  `content/` stays free of React imports. */
export const socialSchema = z.object({
  id: z.string().min(1),
  label: z.string(),
  href: z.string(),
  icon: z.enum(['email', 'github', 'linkedin', 'x', 'instagram']),
  /** Shown next to the icon on the resume/PDF, e.g. `github.com/andrechandra`. */
  handle: z.string().optional(),
  surfaces,
})
export type Social = z.infer<typeof socialSchema>
