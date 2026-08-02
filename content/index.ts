export { site, staticRoutes, absoluteUrl } from './site'
export { profile } from './profile'
export { availability } from './availability'
export { experience } from './experience'
export { education } from './education'
export { skills } from './skills'
export { socials } from './socials'

export { on, bulletFor, dateKey } from './schema'
export type {
  Surface,
  Bullet,
  Profile,
  Availability,
  Experience,
  Engagement,
  Education,
  SkillGroup,
  Social,
} from './schema'

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

/** `2025-06` -> `Jun 2025`; `present` -> `Present`. */
export function formatMonth(value: string): string {
  if (value === 'present') return 'Present'
  const [year, month] = value.split('-')
  return `${MONTHS[Number(month) - 1]} ${year}`
}

/** `Jun 2025 - Present` */
export function formatRange(startDate: string, endDate: string): string {
  return `${formatMonth(startDate)} - ${formatMonth(endDate)}`
}

/** Human label for an engagement type. `venture` is deliberately not "Full time". */
export function engagementLabel(engagement: string): string {
  switch (engagement) {
    case 'full-time':
      return 'Full time'
    case 'venture':
      return 'Own venture'
    case 'internship':
      return 'Internship'
    case 'freelance':
      return 'Freelance'
    case 'volunteer':
      return 'Volunteer'
    default:
      return engagement
  }
}

/** `['a', 'b', 'c']` -> `a, b or c`. Keeps arrangement lists readable. */
export function orList(items: readonly string[]): string {
  if (items.length < 2) return items.join('')
  return `${items.slice(0, -1).join(', ')} or ${items[items.length - 1]}`
}

/** `Jakarta, Indonesia` style string for the current base. */
export function locationLabel(location: {
  city: string
  country: string
}): string {
  return `${location.city}, ${location.country}`
}
