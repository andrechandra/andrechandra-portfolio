import { on, skills } from '@/content'
import { Badge } from '@/components/ui/badge'
import { HomeSection } from './section'

export function Skills() {
  return (
    <HomeSection id="stack" eyebrow="stack" title="What I build with">
      <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        {skills.filter(on('home')).map((group) => (
          <div key={group.id}>
            <dt className="font-geist_mono text-xs tracking-widest text-gray-600 uppercase">
              {group.label}
            </dt>
            <dd className="mt-2.5">
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Badge
                      variant="outline"
                      className="border-[#1f1f1f] bg-[#0c0c0c] font-normal text-gray-300"
                    >
                      {item}
                    </Badge>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </HomeSection>
  )
}
