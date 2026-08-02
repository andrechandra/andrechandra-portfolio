import type { Education } from './schema'

export const education = [
  {
    id: 'umn',
    institution: 'Universitas Multimedia Nusantara',
    institutionUrl: 'https://www.umn.ac.id/',
    degree: 'Bachelor of Informatics Engineering',
    location: 'Tangerang, Indonesia',
    startDate: '2019-08',
    endDate: '2023-08',
    grade: 'GPA 3.63 / 4.00',
    highlights: [
      'Web Development',
      'Mobile Application',
      'Mobile Cross-Platform',
    ],
  },
] satisfies Education[]
