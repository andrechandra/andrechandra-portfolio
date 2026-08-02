export type ProofPoint = {
  id: string
  value: string
  label: string
  href?: string
}

export const proof: ProofPoint[] = [
  {
    id: 'agents',
    value: '500+',
    label: 'agents on BrokerID',
    href: 'https://brokerid.app',
  },
  {
    id: 'ios',
    value: 'iOS',
    label: 'live on the App Store',
    href: 'https://apps.apple.com/id/app/brokerid/id6754389922',
  },
  {
    id: 'android',
    value: 'Android',
    label: 'live on Google Play',
    href: 'https://play.google.com/store/apps/details?id=com.andrechandra.brokerid&hl=id',
  },
  {
    id: 'since',
    value: '2020',
    label: 'shipping to production since',
  },
]
