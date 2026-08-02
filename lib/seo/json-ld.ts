import {
  absoluteUrl,
  availability,
  education,
  experience,
  profile,
  site,
  skills,
} from '@/content'

export const PERSON_ID = absoluteUrl('/#person')
export const WEBSITE_ID = absoluteUrl('/#website')

type JsonLdNode = Record<string, unknown>

export function buildPerson(): JsonLdNode {
  const current = experience.filter((role) => role.endDate === 'present')

  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: profile.name,
    alternateName: profile.alternateName,
    givenName: 'Andre',
    familyName: 'Putra',
    jobTitle: profile.title,
    description: `${profile.positioning} ${availability.headline}, ${availability.employmentTypes.join(' or ')}, from ${profile.location.city} (${availability.timezone.label}).`,
    url: site.url,
    image: absoluteUrl(profile.photo),
    email: `mailto:${profile.email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: profile.location.city,
      addressRegion: profile.location.region,
      addressCountry: profile.location.countryCode,
    },
    worksFor: current.map((role) => ({
      '@type': 'Organization',
      name: role.organization,
      ...(role.organizationUrl ? { url: role.organizationUrl } : {}),
    })),
    alumniOf: education.map((entry) => ({
      '@type': 'CollegeOrUniversity',
      name: entry.institution,
      ...(entry.institutionUrl ? { url: entry.institutionUrl } : {}),
    })),
    knowsAbout: skills.flatMap((group) => group.items),
    knowsLanguage: [
      { '@type': 'Language', name: 'Indonesian' },
      { '@type': 'Language', name: 'English' },
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: profile.title,
      occupationLocation: {
        '@type': 'Country',
        name: profile.location.country,
      },
    },
    sameAs: [
      'https://github.com/andrechandra',
      'https://linkedin.com/in/andrechandraputra',
      'https://x.com/andrechandraap',
      'https://instagram.com/andrechandraap',
    ],
  }
}

export function buildWebSite(): JsonLdNode {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: site.url,
    name: `${profile.name} - ${profile.title}`,
    inLanguage: site.lang,
    publisher: { '@id': PERSON_ID },
  }
}

export function buildProfilePage(path: string): JsonLdNode {
  return {
    '@type': 'ProfilePage',
    '@id': absoluteUrl(`${path}#page`),
    url: absoluteUrl(path),
    name: `${profile.name} - ${profile.title}`,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': PERSON_ID },
    mainEntity: { '@id': PERSON_ID },
    dateModified: availability.updatedAt,
  }
}

export function buildBreadcrumbs(
  crumbs: { name: string; path: string }[]
): JsonLdNode {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  }
}

export type CaseStudyInput = {
  slug: string
  title: string
  description: string
  image: string
  stack?: string[]
  href?: string
  appStoreUrl?: string
  playStoreUrl?: string
}

export function buildCaseStudy(project: CaseStudyInput): JsonLdNode {
  const isApp = Boolean(project.appStoreUrl || project.playStoreUrl)
  const url = absoluteUrl(`/projects/${project.slug}`)

  const base: JsonLdNode = {
    '@id': `${url}#work`,
    url,
    name: project.title,
    description: project.description,
    image: absoluteUrl(project.image),
    author: { '@id': PERSON_ID },
    creator: { '@id': PERSON_ID },
    isPartOf: { '@id': WEBSITE_ID },
    ...(project.stack?.length ? { keywords: project.stack.join(', ') } : {}),
  }

  if (!isApp) {
    return { '@type': 'CreativeWork', ...base }
  }

  return {
    '@type': 'SoftwareApplication',
    ...base,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'iOS, Android, Web',
    installUrl: [project.appStoreUrl, project.playStoreUrl].filter(Boolean),
    ...(project.href ? { sameAs: project.href } : {}),
  }
}

export function graph(...nodes: JsonLdNode[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  }
}
