import { z } from 'zod'

import { profile } from '../content/profile'
import { availability } from '../content/availability'
import { experience } from '../content/experience'
import { education } from '../content/education'
import { skills } from '../content/skills'
import { socials } from '../content/socials'
import {
  availabilitySchema,
  educationSchema,
  experienceSchema,
  on,
  profileSchema,
  skillGroupSchema,
  socialSchema,
} from '../content/schema'

type Check = { name: string; run: () => void }

const errors: string[] = []

function validate<T>(name: string, schema: z.ZodType<T>, value: unknown) {
  const result = schema.safeParse(value)
  if (!result.success) {
    for (const issue of result.error.issues) {
      const path = issue.path.length ? issue.path.join('.') : '(root)'
      errors.push(`${name} -> ${path}: ${issue.message}`)
    }
  }
}

function unique(name: string, ids: string[]) {
  const seen = new Set<string>()
  for (const id of ids) {
    if (seen.has(id)) errors.push(`${name}: duplicate id "${id}"`)
    seen.add(id)
  }
}

const checks: Check[] = [
  { name: 'profile', run: () => validate('profile', profileSchema, profile) },
  {
    name: 'availability',
    run: () => validate('availability', availabilitySchema, availability),
  },
  {
    name: 'experience',
    run: () => {
      validate('experience', z.array(experienceSchema), experience)
      unique(
        'experience',
        experience.map((e) => e.id)
      )
    },
  },
  {
    name: 'education',
    run: () => {
      validate('education', z.array(educationSchema), education)
      unique(
        'education',
        education.map((e) => e.id)
      )
    },
  },
  {
    name: 'skills',
    run: () => {
      validate('skills', z.array(skillGroupSchema), skills)
      unique(
        'skills',
        skills.map((s) => s.id)
      )
    },
  },
  {
    name: 'socials',
    run: () => {
      validate('socials', z.array(socialSchema), socials)
      unique(
        'socials',
        socials.map((s) => s.id)
      )
    },
  },
  {
    name: 'invariants',
    run: () => {

      for (const surface of ['home', 'resume', 'pdf'] as const) {
        if (!experience.some(on(surface))) {
          errors.push(
            `invariants: no experience entries are marked for the "${surface}" surface`
          )
        }
      }

      const corpus = JSON.stringify({ profile, experience, education, skills })
      if (corpus.includes('—')) {
        errors.push('invariants: em dash found in content (use a hyphen)')
      }
    },
  },
]

for (const check of checks) check.run()

if (errors.length) {
  console.error(`\n✗ content validation failed (${errors.length} problem(s)):\n`)
  for (const error of errors) console.error(`  - ${error}`)
  console.error('')
  process.exit(1)
}

console.log(
  `✓ content valid: ${experience.length} roles, ${education.length} education, ${skills.length} skill groups, ${socials.length} socials`
)
