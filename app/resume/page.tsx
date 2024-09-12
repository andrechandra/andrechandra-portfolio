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
        </div>
        <div className="container py-12">
          <section className="space-y-8">
            {/* Working Experience */}
            <div>
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
            <div>
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
            <div>
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
            <div>
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
      </div>
    </>
  )
}
