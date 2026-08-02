import {
  availability,
  education,
  experience,
  formatRange,
  engagementLabel,
  on,
  bulletFor,
  profile,
  skills,
  socials,
  type Surface,
} from '@/content'

export type ResumeContact = {
  id: string
  label: string
  value: string
  href?: string
}

export type ResumeRole = {
  id: string
  role: string
  organization: string
  organizationUrl?: string  
  meta: string
  dates: string
  summary?: string
  bullets: string[]
  stack?: string[]
}

export type ResumeEducation = {
  id: string
  institution: string
  institutionUrl?: string
  degree: string
  dates: string
  grade?: string
  highlights?: string[]
}

export type ResumeSkillGroup = {
  id: string
  label: string
  items: string[]
}

export type ResumeDoc = {
  name: string
  title: string
  location: string
  summary: string
  availabilityLine: string
  contacts: ResumeContact[]
  roles: ResumeRole[]
  education: ResumeEducation[]
  skills: ResumeSkillGroup[]
  languages: string[]
  updatedAt: string
}

export function availabilityLine(): string {
  const types = availability.employmentTypes
    .map((type) => (type === 'full-time' ? 'full-time' : 'contract'))
    .join(' or ')
  return `${availability.headline} (${types}) · ${availability.timezone.label} · ${availability.workArrangement}`
}

function roleMeta(entry: (typeof experience)[number]): string {
  const parts = [engagementLabel(entry.engagement), entry.location]
  if (entry.arrangement) parts.push(entry.arrangement)
  return parts.join(' · ')
}

export function toResumeDoc(surface: Surface = 'resume'): ResumeDoc {
  const roles: ResumeRole[] = experience.filter(on(surface)).map((entry) => ({
    id: entry.id,
    role: entry.role,
    organization: entry.organization,
    organizationUrl: entry.organizationUrl,
    meta: roleMeta(entry),
    dates: formatRange(entry.startDate, entry.endDate),
    summary: surface === 'pdf' ? undefined : entry.summary,
    bullets: entry.bullets
      .map((bullet) => bulletFor(bullet, surface))
      .filter((text): text is string => text !== null),
    stack: entry.stack,
  }))

  return {
    name: profile.name,
    title: profile.title,
    location: `${profile.location.city}, ${profile.location.country}`,
    summary: profile.positioning,
    availabilityLine: availabilityLine(),
    contacts: socials.filter(on(surface)).map((social) => ({
      id: social.id,
      label: social.label,
      value: social.handle ?? social.href,
      href: social.href,
    })),
    roles,
    education: education.filter(on(surface)).map((entry) => ({
      id: entry.id,
      institution: entry.institution,
      institutionUrl: entry.institutionUrl,
      degree: entry.degree,
      dates: formatRange(entry.startDate, entry.endDate),
      grade: entry.grade,
      highlights: surface === 'pdf' ? undefined : entry.highlights,
    })),
    skills: skills.filter(on(surface)).map((group) => ({
      id: group.id,
      label: group.label,
      items: group.items,
    })),
    languages: availability.languages,
    updatedAt: availability.updatedAt,
  }
}
