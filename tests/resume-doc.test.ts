import { describe, expect, it } from 'vitest'
import { toResumeDoc } from '@/lib/resume/to-resume-doc'
import { experience, on, type Bullet } from '@/content'

describe('toResumeDoc', () => {
  it('filters roles by surface', () => {
    const home = toResumeDoc('home')
    const resume = toResumeDoc('resume')
    const pdf = toResumeDoc('pdf')

    // The homepage shows a condensed set; the resume page shows everything.
    expect(home.roles.length).toBeLessThan(resume.roles.length)
    // The PDF drops the earliest freelance role and the volunteer teaching
    // role so it stays on one page.
    expect(pdf.roles.length).toBeLessThan(resume.roles.length)
    expect(pdf.roles.map((r) => r.id)).not.toContain('cv-atm')
    expect(pdf.roles.map((r) => r.id)).not.toContain('umn-lab-assistant')
  })

  it('uses the shortened pdf bullet when one is provided', () => {
    // `satisfies Experience[]` narrows each bullet to its exact literal shape,
    // so widen back to Bullet to read the optional `pdf` override.
    const source = experience.find((role) => role.id === 'star-generation-lead')!
    const bullet = source.bullets[0] as Bullet
    expect(bullet.pdf).toBeTruthy()

    const pdf = toResumeDoc('pdf')
    const web = toResumeDoc('resume')
    const pdfRole = pdf.roles.find((r) => r.id === 'star-generation-lead')!
    const webRole = web.roles.find((r) => r.id === 'star-generation-lead')!

    expect(pdfRole.bullets[0]).toBe(bullet.pdf)
    expect(webRole.bullets[0]).toBe(bullet.text)
  })

  it('keeps every pdf bullet within the length the layout can paginate', () => {
    for (const role of toResumeDoc('pdf').roles) {
      for (const bullet of role.bullets) {
        expect(bullet.length).toBeLessThanOrEqual(170)
      }
    }
  })

  it('omits role summaries from the pdf but keeps them on the web', () => {
    expect(toResumeDoc('pdf').roles.every((r) => r.summary === undefined)).toBe(
      true
    )
    expect(toResumeDoc('resume').roles.some((r) => r.summary)).toBe(true)
  })

  it('states employment type, timezone and arrangement in one line', () => {
    const line = toResumeDoc('pdf').availabilityLine
    expect(line).toMatch(/full-time|contract/)
    expect(line).toContain('GMT+7')
    expect(line).toContain('remote')
  })
})

describe('surface predicate', () => {
  it('treats a missing `surfaces` field as "every surface"', () => {
    expect(on('pdf')({ id: 'x' })).toBe(true)
    expect(on('pdf')({ id: 'x', surfaces: ['resume'] })).toBe(false)
    expect(on('resume')({ id: 'x', surfaces: ['resume'] })).toBe(true)
  })
})
