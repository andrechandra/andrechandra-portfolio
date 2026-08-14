import { describe, expect, it } from 'vitest'
import {
  PERSON_ID,
  buildBreadcrumbs,
  buildCaseStudy,
  buildPerson,
  buildProfilePage,
  buildWebSite,
  graph,
} from '@/lib/seo/json-ld'
import { site } from '@/content'

describe('json-ld', () => {
  it('anchors every entity to the production domain', () => {
    const json = JSON.stringify(
      graph(buildPerson(), buildWebSite(), buildProfilePage('/'))
    )
    expect(json).toContain('https://andrechandra.dev')
    expect(json).not.toContain('vercel.app')
    expect(site.url).toBe('https://andrechandra.dev')
  })

  it('describes the Person with the fields a recruiter search needs', () => {
    const person = buildPerson()
    expect(person['@id']).toBe(PERSON_ID)
    expect(person.jobTitle).toBe('Fullstack Software Engineer')
    expect(String(person.description)).toContain('GMT+7')
    expect(person.sameAs).toEqual(
      expect.arrayContaining([
        'https://github.com/andrechandra',
        'https://linkedin.com/in/andrechandraputra',
      ])
    )
    expect(person.knowsAbout).toEqual(
      expect.arrayContaining(['TypeScript', 'PostgreSQL', 'Supabase'])
    )
  })

  it('keeps the WebSite name short enough for Google to use as the site name', () => {
    const website = buildWebSite()
    expect(website.name).toBe('Andre Chandra')
    expect(String(website.name)).not.toContain('-')
    expect(website.alternateName).toEqual(
      expect.arrayContaining(['Andre Chandra Putra', 'andrechandra.dev'])
    )
  })

  it('types a store-published project as SoftwareApplication with install links', () => {
    const node = buildCaseStudy({
      slug: 'brokerid',
      title: 'BrokerID',
      description: 'A property platform.',
      image: '/x.webp',
      appStoreUrl: 'https://apps.apple.com/id/app/brokerid/id6754389922',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=x',
    })
    expect(node['@type']).toBe('SoftwareApplication')
    expect(node.installUrl).toHaveLength(2)
    expect(node.author).toEqual({ '@id': PERSON_ID })
  })

  it('types a plain site as CreativeWork', () => {
    const node = buildCaseStudy({
      slug: 'bcs-serpong',
      title: 'BCS Serpong',
      description: 'A church website.',
      image: '/y.webp',
    })
    expect(node['@type']).toBe('CreativeWork')
    expect(node.installUrl).toBeUndefined()
  })

  it('numbers breadcrumbs from 1 with absolute items', () => {
    const crumbs = buildBreadcrumbs([
      { name: 'Home', path: '/' },
      { name: 'Work', path: '/projects' },
    ]) as { itemListElement: { position: number; item: string }[] }
    expect(crumbs.itemListElement[0].position).toBe(1)
    expect(crumbs.itemListElement[1].item).toBe(
      'https://andrechandra.dev/projects'
    )
  })

  it('does not invent SearchAction or open-to-work markup', () => {
    const json = JSON.stringify(graph(buildWebSite(), buildPerson()))
    expect(json).not.toContain('SearchAction')
    expect(json).not.toContain('"seeks"')
  })
})
