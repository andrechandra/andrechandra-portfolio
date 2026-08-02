'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image, { type StaticImageData } from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

type GalleryImage = StaticImageData | string

export function Gallery({
  images,
  layout = 'web',
  label,
  previewLimit = 6,
}: {
  images: GalleryImage[]
  layout?: 'web' | 'mobile'
  label: string
  previewLimit?: number
}) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [index, setIndex] = useState(0)
  const [expanded, setExpanded] = useState(false)

  const visible = expanded ? images : images.slice(0, previewLimit)
  const hidden = images.length - visible.length

  const open = useCallback((next: number) => {
    setIndex(next)
    dialogRef.current?.showModal()
  }, [])

  const step = useCallback(
    (delta: number) => {
      setIndex((current) => (current + delta + images.length) % images.length)
    },
    [images.length]
  )

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (!dialogRef.current?.open) return
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        step(1)
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        step(-1)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [step])

  const aspect = layout === 'mobile' ? 'aspect-[3/4]' : 'aspect-video'
  const columns =
    layout === 'mobile'
      ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
      : 'grid-cols-1 sm:grid-cols-2'

  return (
    <>
      <ul className={`grid gap-3 ${columns}`}>
        {visible.map((image, position) => (
          <li key={position}>
            <button
              type="button"
              onClick={() => open(position)}
              className={`group relative block w-full overflow-hidden rounded-lg border border-[#1f1f1f] bg-[#0d0d0d] ${aspect} focus-visible:ring-2 focus-visible:ring-[#55f89f] focus-visible:outline-none`}
            >
              <Image
                src={image}
                alt={`${label}, image ${position + 1} of ${images.length}`}
                fill
                sizes={
                  layout === 'mobile'
                    ? '(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 45vw'
                    : '(min-width: 640px) 45vw, 92vw'
                }
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </button>
          </li>
        ))}
      </ul>

      {hidden > 0 ? (
        <Button
          variant="primary"
          size="small"
          className="mt-4"
          onClick={() => setExpanded(true)}
        >
          <span className="font-geist_mono tracking-tighter">
            Show {hidden} more
          </span>
        </Button>
      ) : null}

      <dialog
        ref={dialogRef}
        aria-label={`${label} image viewer`}
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current?.close()
        }}
        className="m-0 h-full max-h-none w-full max-w-none bg-transparent p-0 backdrop:bg-black/90"
      >
        <div className="pointer-events-none relative flex h-full w-full items-center justify-center p-4 sm:p-10">
          <Image
            src={images[index]}
            alt={`${label}, image ${index + 1} of ${images.length}`}
            width={1920}
            height={1080}
            sizes="100vw"
            className="max-h-full w-auto max-w-full object-contain"
          />

          <div className="pointer-events-auto">
            <Button
              variant="primary"
              size="icon"
              className="absolute top-4 right-4 bg-black/70"
              onClick={() => dialogRef.current?.close()}
            >
              <X aria-hidden="true" />
              <span className="sr-only">Close</span>
            </Button>

            {images.length > 1 ? (
              <>
                <Button
                  variant="primary"
                  size="icon"
                  className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/70"
                  onClick={() => step(-1)}
                >
                  <ChevronLeft aria-hidden="true" />
                  <span className="sr-only">Previous image</span>
                </Button>
                <Button
                  variant="primary"
                  size="icon"
                  className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/70"
                  onClick={() => step(1)}
                >
                  <ChevronRight aria-hidden="true" />
                  <span className="sr-only">Next image</span>
                </Button>
                <p
                  aria-live="polite"
                  className="font-geist_mono absolute bottom-5 left-1/2 -translate-x-1/2 rounded-md bg-black/70 px-3 py-1 text-xs tracking-tighter text-gray-400"
                >
                  {index + 1} / {images.length}
                </p>
              </>
            ) : null}
          </div>
        </div>
      </dialog>
    </>
  )
}
