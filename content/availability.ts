import type { Availability } from './schema'

export const availability: Availability = {
  status: 'open',
  headline: 'Open to work',
  employmentTypes: ['full-time', 'contract'],
  workArrangement: ['remote', 'hybrid', 'on-site'],
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
    contractorReady: true,
    openToRelocation: true,
    channels: ['email', 'whatsapp'],
    note: 'Hiring conversations go through email or WhatsApp only. Happy to sign directly as a full-time hire or as a contractor.',
  },
  languages: [
    'Indonesian (native)',
    'English (professional working proficiency)',
  ],
  updatedAt: '2026-08-03',
}
