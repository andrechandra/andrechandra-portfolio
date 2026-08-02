'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          color: '#e5e5e5',
          fontFamily:
            'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '32rem' }}>
          <p style={{ color: '#55f89f', fontSize: '0.875rem', margin: 0 }}>
            &gt;_error
          </p>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 300, marginTop: '1rem' }}>
            Something went wrong
          </h1>
          {error.digest ? (
            <p style={{ fontSize: '0.75rem', color: '#737373' }}>
              Reference: {error.digest}
            </p>
          ) : null}
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: '1.5rem',
              padding: '0.5rem 1rem',
              background: 'transparent',
              border: '1px solid #2c2c2c',
              borderRadius: '0.375rem',
              color: '#fff',
              cursor: 'pointer',
              font: 'inherit',
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
