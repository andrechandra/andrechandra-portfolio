import Link from 'next/link'

export const SocialLink = ({
  href,
  children,
  className = '',
}: {
  href: string
  children: React.ReactNode
  className?: string
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`block text-gray-400 hover:text-[#55f89f] hover:scale-110 transition-colors cursor-[var(--external-cursor)] ${className}`}
  >
    {children}
  </Link>
)
