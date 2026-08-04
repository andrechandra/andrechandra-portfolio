import type { Metadata } from 'next'
import Link from 'next/link'
import { Download, ExternalLink } from 'lucide-react'
import { availability, formatMonth, profile } from '@/content'
import { toResumeDoc } from '@/lib/resume/to-resume-doc'
import { RESUME_PDF_PATH } from '@/lib/resume/constants'
import { Button } from '@/components/ui/button'
import { LinkButton } from '@/components/ui/link-button'
import { Badge } from '@/components/ui/badge'
import { Reveal } from '@/components/ui/reveal'
import { JsonLd } from '@/components/seo/json-ld'
import {
  buildBreadcrumbs,
  buildPerson,
  buildProfilePage,
  buildWebSite,
  graph,
} from '@/lib/seo/json-ld'

export const metadata: Metadata = {
  title: 'Resume',
  description: `${profile.name} - ${profile.title}. Experience, skills and education. ${availability.headline}, based in ${profile.location.city} (${availability.timezone.label}).`,
  alternates: { canonical: '/resume' },
  openGraph: {
    title: `Resume | ${profile.name}`,
    description: `${profile.title} - experience, skills and education.`,
    type: 'profile',
  },
}

function SectionHeading({ children, id }: { children: string; id: string }) {
  return (
    <h2
      id={id}
      className="font-geist_mono border-b border-[#2c2c2c] pb-2 text-xs tracking-widest text-[#55f89f] uppercase print:border-neutral-300 print:text-black"
    >
      {children}
    </h2>
  )
}

export default function ResumePage() {
  const doc = toResumeDoc('resume')

  return (
    <main className="bg-grid print:bg-white">
      <JsonLd
        data={graph(
          buildPerson(),
          buildWebSite(),
          buildProfilePage('/resume'),
          buildBreadcrumbs([
            { name: 'Home', path: '/' },
            { name: 'Resume', path: '/resume' },
          ])
        )}
      />
      <div className="mx-auto max-w-3xl px-4 pt-28 pb-20 sm:px-6 print:max-w-none print:px-0 print:pt-0 print:pb-0">
        {/* Header */}
        <Reveal as="header" immediate className="print:mb-4">
          <h1 className="text-3xl font-light text-gray-100 sm:text-4xl print:text-2xl print:text-black">
            {doc.name}
          </h1>
          <p className="font-geist_mono mt-2 text-base tracking-tighter text-[#55f89f] print:text-black">
            {doc.title}
          </p>

          <p className="mt-5 max-w-2xl leading-relaxed text-gray-400 print:text-black">
            {doc.summary}
          </p>

          {/* Availability: the two questions an international recruiter asks first. */}
          <div className="mt-6 rounded-lg border border-[#2c2c2c] bg-[#0d0d0d] p-4 print:border-neutral-300 print:bg-transparent print:p-0">
            <p className="font-geist_mono flex items-center gap-2 text-sm tracking-tighter text-gray-200 print:text-black">
              <span
                aria-hidden="true"
                className="inline-block size-2 rounded-full bg-[#55f89f] print:hidden"
              />
              {availability.headline}
              <span className="text-gray-500"> · </span>
              {availability.employmentTypes.join(' or ')}
            </p>
            <dl className="font-geist_mono mt-3 grid gap-x-6 gap-y-1.5 text-xs tracking-tighter text-gray-400 sm:grid-cols-2 print:text-black">
              <div className="flex gap-2">
                <dt className="text-gray-600 print:text-neutral-600">Based</dt>
                <dd>
                  {doc.location} ({availability.timezone.label})
                </dd>
              </div>
              {availability.overlapWindows.map((window) => (
                <div key={window.region} className="flex gap-2">
                  <dt className="text-gray-600 print:text-neutral-600">
                    {window.region}
                  </dt>
                  <dd>{window.hours}</dd>
                </div>
              ))}
              <div className="flex gap-2 sm:col-span-2">
                <dt className="text-gray-600 print:text-neutral-600">Hiring</dt>
                <dd>{availability.engagement.note}</dd>
              </div>
              <div className="flex gap-2 sm:col-span-2">
                <dt className="text-gray-600 print:text-neutral-600">Spoken</dt>
                <dd>{doc.languages.join(', ')}</dd>
              </div>
            </dl>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 print:hidden">
            <Button variant="primary" asChild isExternal>
              <a
                href={RESUME_PDF_PATH}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download aria-hidden="true" />
                <span className="font-geist_mono tracking-tighter">
                  Download PDF
                </span>
              </a>
            </Button>
            <span className="font-geist_mono text-xs tracking-tighter text-gray-600">
              Updated {formatMonth(doc.updatedAt.slice(0, 7))}
            </span>
          </div>
        </Reveal>

        {/* Experience */}
        <Reveal
          as="section"
          className="mt-12 print:mt-6"
          aria-labelledby="experience"
        >
          <SectionHeading id="experience">Experience</SectionHeading>
          <ol className="reveal-stagger mt-6 space-y-8 print:space-y-4">
            {doc.roles.map((role) => (
              <li key={role.id} className="print:break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-base text-gray-100 print:text-black">
                    <span className="font-medium">{role.role}</span>
                    <span className="text-gray-500">, </span>
                    {role.organizationUrl ? (
                      <LinkButton
                        variant="underline_link_right"
                        asChild
                        className="print:text-black"
                        isExternal
                      >
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
                  <p className="font-geist_mono text-xs tracking-tighter whitespace-nowrap text-gray-500 print:text-neutral-600">
                    {role.dates}
                  </p>
                </div>
                <p className="font-geist_mono mt-1 text-xs tracking-tighter text-gray-500 print:text-neutral-600">
                  {role.meta}
                </p>
                {role.summary ? (
                  <p className="mt-2 text-sm text-gray-400 print:text-black">
                    {role.summary}
                  </p>
                ) : null}
                <ul className="mt-3 space-y-1.5">
                  {role.bullets.map((bullet, index) => (
                    <li
                      key={index}
                      className="flex gap-2.5 text-sm leading-relaxed text-gray-400 print:text-black"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 size-1 shrink-0 rounded-full bg-gray-600"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                {role.stack?.length ? (
                  <ul className="mt-3 flex flex-wrap gap-1.5 print:hidden">
                    {role.stack.map((tech) => (
                      <li key={tech}>
                        <Badge
                          variant="outline"
                          className="border-[#1f1f1f] font-normal text-gray-500"
                        >
                          {tech}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ol>
        </Reveal>

        {/* Skills */}
        <Reveal
          as="section"
          className="mt-12 print:mt-6"
          aria-labelledby="skills"
        >
          <SectionHeading id="skills">Skills</SectionHeading>
          <dl className="mt-6 space-y-3 print:space-y-1.5">
            {doc.skills.map((group) => (
              <div key={group.id} className="sm:flex sm:gap-4">
                <dt className="font-geist_mono w-40 shrink-0 text-xs tracking-tighter text-gray-500 print:text-neutral-600">
                  {group.label}
                </dt>
                <dd className="text-sm text-gray-300 print:text-black">
                  {group.items.join(', ')}
                </dd>
              </div>
            ))}
            <div className="sm:flex sm:gap-4">
              <dt className="font-geist_mono w-40 shrink-0 text-xs tracking-tighter text-gray-500 print:text-neutral-600">
                Spoken
              </dt>
              <dd className="text-sm text-gray-300 print:text-black">
                {doc.languages.join(', ')}
              </dd>
            </div>
          </dl>
        </Reveal>

        {/* Education */}
        <Reveal
          as="section"
          className="mt-12 print:mt-6"
          aria-labelledby="education"
        >
          <SectionHeading id="education">Education</SectionHeading>
          <ol className="reveal-stagger mt-6 space-y-4">
            {doc.education.map((entry) => (
              <li key={entry.id} className="print:break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-base text-gray-100 print:text-black">
                    {entry.institutionUrl ? (
                      <LinkButton
                        variant="underline_link_right"
                        asChild
                        className="print:text-black"
                        isExternal
                      >
                        <a
                          href={entry.institutionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {entry.institution}
                        </a>
                      </LinkButton>
                    ) : (
                      entry.institution
                    )}
                  </h3>
                  <p className="font-geist_mono text-xs tracking-tighter whitespace-nowrap text-gray-500 print:text-neutral-600">
                    {entry.dates}
                  </p>
                </div>
                <p className="mt-1 text-sm text-gray-400 print:text-black">
                  {entry.degree}
                  {entry.grade ? ` · ${entry.grade}` : ''}
                </p>
                {entry.highlights?.length ? (
                  <p className="font-geist_mono mt-2 text-xs tracking-tighter text-gray-600 print:text-neutral-600">
                    {entry.highlights.join(' · ')}
                  </p>
                ) : null}
              </li>
            ))}
          </ol>
        </Reveal>

        <p className="font-geist_mono mt-12 text-xs tracking-tighter text-gray-600 print:hidden">
          Prefer a file?{' '}
          <LinkButton
            variant="underline_link_right"
            asChild
            className="text-gray-400"
            isExternal
          >
            <a href={RESUME_PDF_PATH} target="_blank" rel="noopener noreferrer">
              Download the PDF
            </a>
          </LinkButton>
          , or{' '}
          <LinkButton
            variant="underline_link_right"
            asChild
            className="text-gray-400"
          >
            <Link href="/projects">read the case studies</Link>
          </LinkButton>
          <ExternalLink className="ml-1 inline size-3" aria-hidden="true" />
        </p>
      </div>
    </main>
  )
}
