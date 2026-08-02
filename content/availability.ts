import type { Availability } from './schema'

export const availability: Availability = {
  status: 'open',
  headline: 'Open to remote roles',
  employmentTypes: ['full-time', 'contract'],
  workArrangement: 'remote',
  timezone: {
    iana: 'Asia/Jakarta',
    label: 'GMT+7',
    overlapNote: 'Async-first, with daily overlap into European hours.',
  },
  overlapWindows: [
    { region: 'Asia-Pacific', hours: 'Full working day' },
    { region: 'Europe (CET)', hours: '4-6 hours daily' },
    { region: 'US East', hours: '3 hours, US morning' },
  ],
  engagement: {
    viaEOR: true,
    contractorReady: true,
    note: 'Hire through an employer of record (Deel, Remote, Oyster) or contract with me directly.',
  },
  languages: [
    'Indonesian (native)',
    'English (professional working proficiency)',
  ],
  updatedAt: '2026-08-01',
}
