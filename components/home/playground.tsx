import dynamic from 'next/dynamic'
import { Reveal } from '@/components/ui/reveal'

const TerminalSection = dynamic(() => import('@/components/terminal'))

export function Playground() {
  return (
    <Reveal
      as="section"
      aria-labelledby="playground-heading"
      className="py-14 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className="font-geist_mono text-xs tracking-widest text-[#55f89f]">
          &gt;_playground
        </p>
        <h2
          id="playground-heading"
          className="mt-2 text-2xl font-light text-gray-100 sm:text-3xl"
        >
          Have a poke around
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-400">
          Type <code className="font-geist_mono text-[#55f89f]">help</code> to
          see what it knows.
        </p>

        <div className="mt-8">
          <TerminalSection />
        </div>
      </div>
    </Reveal>
  )
}
