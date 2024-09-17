import Link from '@/components/Link'

const BlogLinks = () => {
  return (
    <div className="flex justify-between">
      <ul className="flex flex-col space-y-1.5 list-disc pl-5">
        <li>
          <Link
            href="/blog"
            className="relative inline-block text-gray-900 dark:text-gray-100 group"
          >
            <span
              className="relative z-10 before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-primary-500 before:transform before:scale-x-0 before:origin-left before:transition-transform before:duration-300 group-hover:before:scale-x-100"
            >
              My writings
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className="relative inline-block text-gray-900 dark:text-gray-100 group"
          >
            <span
              className="relative z-10 before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-primary-500 before:transform before:scale-x-0 before:origin-left before:transition-transform before:duration-300 group-hover:before:scale-x-100"
            >
              What have I built?
            </span>
          </Link>
        </li>
      </ul>
      <ul className="flex flex-col space-y-1.5 list-disc pl-5">
        <li>
          <Link
            href="/about"
            className="relative inline-block text-gray-900 dark:text-gray-100 group"
          >
            <span
              className="relative z-10 before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-primary-500 before:transform before:scale-x-0 before:origin-left before:transition-transform before:duration-300 group-hover:before:scale-x-100"
            >
              More about me and myself
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/resume"
            className="relative inline-block text-gray-900 dark:text-gray-100 group"
          >
            <span
              className="relative z-10 before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-primary-500 before:transform before:scale-x-0 before:origin-left before:transition-transform before:duration-300 group-hover:before:scale-x-100"
            >
              My career
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BlogLinks;
