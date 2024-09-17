import { genPageMetadata } from 'app/seo'
import { resumeData } from '@/data/resumeData'

export const metadata = genPageMetadata({ title: 'Resume' })

export default function Page() {
  const { workingExperience, voluntaryExperience, education, additionalSkills } = resumeData

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-10 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Resume
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            My professional career, experiences, and skills.
          </p>
          <nav className="mb-6 space-x-4">
            <a href="#working-experience" className="text-primary-500 hover:underline">
              Working Experience
            </a>
            <a href="#voluntary-experience" className="text-primary-500 hover:underline">
              Voluntary Experience
            </a>
            <a href="#education" className="text-primary-500 hover:underline">
              Education
            </a>
            <a href="#additional-skills" className="text-primary-500 hover:underline">
              Additional Skills
            </a>
          </nav>
        </div>
        <div className="container py-12">
          <section className="space-y-8">
            {/* Working Experience */}
            <div id="working-experience" className="scroll-mt-scroll-offset">
              <h2 className="pb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
                WORKING EXPERIENCE
              </h2>
              <div className="space-y-4">
                {workingExperience.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-gray-200 p-4 dark:border-gray-700"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.duration}</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5">
                      {item.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            {/* Voluntary Experience */}
            <div id="voluntary-experience" className="scroll-mt-scroll-offset">
              <h2 className="pb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
                VOLUNTARY EXPERIENCE
              </h2>
              {voluntaryExperience.map((item, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 p-4 dark:border-gray-700"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.duration}</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    {item.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {/* Education */}
            <div id="education" className="scroll-mt-scroll-offset">
              <h2 className="pb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
                EDUCATION
              </h2>
              {education.map((item, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 p-4 dark:border-gray-700"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {item.institution}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.duration}</p>
                  <p>{item.degree}</p>
                  <p>GPA: {item.gpa}</p>
                  <p>Key Subjects: {item.keySubjects.join(', ')}</p>
                </div>
              ))}
            </div>
            {/* Additional Skills */}
            <div id="additional-skills" className="scroll-mt-scroll-offset">
              <h2 className="pb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
                ADDITIONAL SKILLS
              </h2>
              <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                <p>
                  <strong>Programming Languages:</strong>{' '}
                  {additionalSkills.programmingLanguages.join(', ')}
                </p>
                <p>
                  <strong>Web Development:</strong> {additionalSkills.webDevelopment.join(', ')}
                </p>
                <p>
                  <strong>Mobile Development:</strong>{' '}
                  {additionalSkills.mobileDevelopment.join(', ')}
                </p>
                <p>
                  <strong>Databases:</strong> {additionalSkills.databases.join(', ')}
                </p>
                <p>
                  <strong>Tools:</strong> {additionalSkills.tools.join(', ')}
                </p>
                <p>
                  <strong>Languages:</strong> {additionalSkills.languages.join(', ')}
                </p>
                <p>
                  <strong>Interests:</strong> {additionalSkills.interests.join(', ')}
                </p>
              </div>
            </div>
          </section>
        </div>
        <footer className="py-4 text-center text-gray-500 dark:text-gray-400">
          <p>Last updated: September 2024</p>
        </footer>
      </div>
    </>
  )
}
