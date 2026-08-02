import { proof } from '@/content/proof'
import { Reveal } from '@/components/ui/reveal'

export function ProofStrip() {
  return (
    <Reveal
      as="section"
      aria-label="Evidence"
      className="border-y border-[#1a1a1a] bg-[#070707]"
    >
      <ul className="mx-auto grid max-w-5xl grid-cols-2 gap-px px-4 sm:px-6 md:grid-cols-4">
        {proof.map((point) => {
          const body = (
            <>
              <span className="block text-xl font-light text-[#55f89f] sm:text-2xl">
                {point.value}
              </span>
              <span className="font-geist_mono mt-1 block text-xs tracking-tighter text-gray-500">
                {point.label}
              </span>
            </>
          )

          return (
            <li key={point.id} className="py-6">
              {point.href ? (
                <a
                  href={point.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block cursor-[var(--external-cursor)] rounded-md transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-[#55f89f] focus-visible:outline-none"
                >
                  {body}
                </a>
              ) : (
                body
              )}
            </li>
          )
        })}
      </ul>
    </Reveal>
  )
}
