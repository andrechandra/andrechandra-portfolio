import { availability, profile } from '@/content'

export function AvailabilityCard() {
  const open = availability.status !== 'not-looking'

  return (
    <div className="rounded-xl border border-[#2c2c2c] bg-[#0c0c0c]/80 p-5">
      <p className="flex items-center gap-2.5">
        <span className="relative flex size-2.5 shrink-0" aria-hidden="true">
          {open ? (
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#55f89f] opacity-60" />
          ) : null}
          <span
            className={`relative inline-flex size-2.5 rounded-full ${
              open ? 'bg-[#55f89f]' : 'bg-gray-500'
            }`}
          />
        </span>
        <span className="font-geist_mono text-sm tracking-tighter text-gray-100">
          {availability.headline}
        </span>
      </p>

      <p className="font-geist_mono mt-1 pl-[1.375rem] text-sm tracking-tighter text-gray-400">
        {availability.employmentTypes.join(' or ')}
      </p>

      <dl className="font-geist_mono mt-4 space-y-1.5 border-t border-[#1c1c1c] pt-4 text-xs tracking-tighter">
        <div className="flex gap-3">
          <dt className="w-20 shrink-0 text-gray-600">Based</dt>
          <dd className="text-gray-300">
            {profile.location.city}, {profile.location.country} ·{' '}
            {availability.timezone.label}
          </dd>
        </div>
        {availability.overlapWindows.map((window) => (
          <div key={window.region} className="flex gap-3">
            <dt className="w-20 shrink-0 text-gray-600">{window.region}</dt>
            <dd className="text-gray-300">{window.hours}</dd>
          </div>
        ))}
        <div className="flex gap-3">
          <dt className="w-20 shrink-0 text-gray-600">Hiring</dt>
          <dd className="text-gray-300">
            {availability.engagement.viaEOR
              ? 'Via EOR or direct contract'
              : 'Direct contract'}
          </dd>
        </div>
        <div className="flex gap-3">
          <dt className="w-20 shrink-0 text-gray-600">English</dt>
          <dd className="text-gray-300">Professional working proficiency</dd>
        </div>
      </dl>
    </div>
  )
}
