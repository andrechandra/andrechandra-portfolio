import { cn } from '@/lib/utils'

export function MenuToggleIcon({ open }: { open: boolean }) {
  const bar =
    'absolute left-0 block h-[1.5px] w-4 rounded-full bg-current transition duration-300 ease-out'

  return (
    <span aria-hidden="true" className="relative block size-4">
      <span
        className={cn(
          bar,
          'top-[3px]',
          open && 'translate-y-[4.5px] rotate-45'
        )}
      />
      <span className={cn(bar, 'top-[7.5px]', open && 'opacity-0')} />
      <span
        className={cn(
          bar,
          'top-[12px]',
          open && '-translate-y-[4.5px] -rotate-45'
        )}
      />
    </span>
  )
}
