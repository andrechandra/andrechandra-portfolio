import { engagementLabel, experience, formatRange, on } from '@/content'
import { LinkButton } from '@/components/ui/link-button'
import { HomeSection } from './section'

export function ExperienceTimeline() {
  const roles = experience.filter(on('home'))

  return (
    <HomeSection
      id="experience"
      eyebrow="experience"
      title="Where I have worked"
      action={{ href: '/resume', label: 'Full resume' }}
    >
      <ol className="space-y-8">
        {roles.map((role) => (
          <li
            key={role.id}
            className="border-l border-[#1f1f1f] pl-5 sm:pl-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-base text-gray-100">
                <span className="font-medium">{role.role}</span>
                <span className="text-gray-600">, </span>
                {role.organizationUrl ? (
                  <LinkButton variant="underline_link_right" asChild isExternal>
                    <a
                      href={role.organizationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {role.organization}
                    </a>
                  </LinkButton>
                ) : (
                  <span className="text-gray-300">{role.organization}</span>
                )}
              </h3>
              <p className="font-geist_mono text-xs tracking-tighter whitespace-nowrap text-gray-600">
                {formatRange(role.startDate, role.endDate)}
              </p>
            </div>

            <p className="font-geist_mono mt-1 text-xs tracking-tighter text-gray-600">
              {engagementLabel(role.engagement)} · {role.location}
            </p>

            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              {role.summary ?? role.bullets[0].text}
            </p>
          </li>
        ))}
      </ol>
    </HomeSection>
  )
}
