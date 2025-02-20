export default function Footer() {
  return (
    <footer className="py-6 text-center text-xs sm:text-sm text-muted-foreground">
      © {new Date().getFullYear()}{' '}
      <a
        href="https://github.com/andrechandra"
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-fit text-white after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:origin-right after:bg-gradient-to-r after:from-yellow-400 after:to-pink-200 after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
      >
        Andre Chandra
      </a>
      . All rights reserved.
    </footer>
  )
}
