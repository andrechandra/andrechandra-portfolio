import Link from '@/components/Link'

const BlogLinks = () => {
  return (
    <div className="flex justify-between">
      <ul className="flex list-disc flex-col space-y-1.5 pl-5">
        <li>
          <Link
            href="/blog"
            className="group relative inline-block text-gray-900 dark:text-gray-100"
          >
            <span className="relative z-10 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-left before:scale-x-0 before:transform before:bg-primary-500 before:transition-transform before:duration-300 group-hover:before:scale-x-100">
              My writings
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className="group relative inline-block text-gray-900 dark:text-gray-100"
          >
            <span className="relative z-10 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-left before:scale-x-0 before:transform before:bg-primary-500 before:transition-transform before:duration-300 group-hover:before:scale-x-100">
              What have I built?
            </span>
          </Link>
        </li>
      </ul>
      <ul className="flex list-disc flex-col space-y-1.5 pl-5">
        <li>
          <Link
            href="/about"
            className="group relative inline-block text-gray-900 dark:text-gray-100"
          >
            <span className="relative z-10 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-left before:scale-x-0 before:transform before:bg-primary-500 before:transition-transform before:duration-300 group-hover:before:scale-x-100">
              More about me and myself
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/resume"
            className="group relative inline-block text-gray-900 dark:text-gray-100"
          >
            <span className="relative z-10 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-left before:scale-x-0 before:transform before:bg-primary-500 before:transition-transform before:duration-300 group-hover:before:scale-x-100">
              My career
            </span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default BlogLinks
