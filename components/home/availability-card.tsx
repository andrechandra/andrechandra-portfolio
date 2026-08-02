import { availability, orList, profile, socials } from '@/content'

export function AvailabilityCard() {
  const open = availability.status !== 'not-looking'

  const employment = orList(availability.employmentTypes)
  const arrangement = orList(availability.workArrangement)
  const overlap = availability.overlapWindows
    .map((window) => `${window.region} ${window.hours}`)
    .join(' · ')

  const email = socials.find((social) => social.id === 'email')
  const whatsapp = socials.find((social) => social.id === 'whatsapp')
  const contacts = [email, whatsapp].filter((social) => social !== undefined)

  return (
    <div className="rounded-xl border border-[#2c2c2c] bg-[#0c0c0c]/80 p-5">
      <p className="flex items-center gap-2.5">
        <span className="relative flex size-2.5 shrink-0" aria-hidden="true">
          {open ? (
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#55f89f] opacity-60" />
          ) : null}
          <span
            className={`relative inline-flex size-2.5 rounded-full ${open ? 'bg-[#55f89f]' : 'bg-gray-500'
              }`}
          />
        </span>
        <span className="font-geist_mono text-sm tracking-tighter text-gray-100">
          {availability.headline}
        </span>
      </p>

      <p className="font-geist_mono mt-1 pl-[1.375rem] text-sm tracking-tighter text-gray-400">
        {employment} · {arrangement}
        {availability.engagement.openToRelocation
          ? ' · open to relocation'
          : null}
      </p>

      <dl className="font-geist_mono mt-4 space-y-1.5 border-t border-[#1c1c1c] pt-4 text-xs tracking-tighter">
        <div className="flex gap-3">
          <dt className="w-20 shrink-0 text-gray-600">Based</dt>
          <dd className="text-gray-300">
            {profile.location.city}, {profile.location.country} ·{' '}
            {availability.timezone.label}
          </dd>
        </div>
        <div className="flex gap-3">
          <dt className="w-20 shrink-0 text-gray-600">Overlap</dt>
          <dd className="text-gray-300">{overlap}</dd>
        </div>
        <div className="flex gap-3">
          <dt className="w-20 shrink-0 text-gray-600">Contact</dt>
          <dd className="flex flex-wrap gap-x-2 gap-y-1 text-gray-300">
            {contacts.map((social, index) => (
              <span key={social.id} className="flex items-center gap-2">
                <a
                  href={social.href}
                  className="relative inline-block w-fit text-white transition-colors after:absolute after:bottom-0 after:left-0 after:h-[0.05rem] after:w-full after:origin-right after:scale-x-0 after:bg-gradient-to-r after:from-[#55f89f] after:to-[#55f8d5] after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
                  {...(social.id === 'whatsapp'
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  {social.handle ?? social.label}
                </a>
                {index < contacts.length - 1 ? (
                  <span aria-hidden="true" className="text-gray-600">
                    ·
                  </span>
                ) : null}
              </span>
            ))}
          </dd>
        </div>
      </dl>
    </div>
  )
}
