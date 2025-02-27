export const ProjectContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <article className="prose prose-gray dark:prose-invert max-w-none">
      <style jsx global>{`
        .prose pre {
          background-color: #1e1e1e;
          border-radius: 0.5rem;
          padding: 1rem;
          overflow-x: auto;
        }
        .prose code {
          background-color: #1e1e1e;
          border-radius: 0.25rem;
          padding: 0.2rem 0.4rem;
          font-size: 0.875em;
          color: #e5e7eb;
        }
        .prose img {
          border-radius: 0.5rem;
          margin: 2rem 0;
        }
        .prose .command-line {
          background-color: #1e1e1e;
          border-radius: 0.5rem;
          padding: 1rem;
          color: #e5e7eb;
          font-family: --font-geist-mono;
        }
        .prose .command-line::before {
          content: '$ ';
          color: #6b7280;
        }
      `}</style>
      {children}
    </article>
  )
}
