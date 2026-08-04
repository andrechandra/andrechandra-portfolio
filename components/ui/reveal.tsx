import type {
  CSSProperties,
  ElementType,
  HTMLAttributes,
  ReactNode,
} from 'react'
import { cn } from '@/lib/utils'

export function Reveal({
  as: Tag = 'div',
  className,
  children,
  delay = 0,
  immediate = false,
  ...rest
}: {
  as?: ElementType
  className?: string
  children: ReactNode
  delay?: number
  immediate?: boolean
} & Omit<HTMLAttributes<HTMLElement>, 'children' | 'className' | 'style'>) {
  const style = delay
    ? ({ '--reveal-delay': `${delay}ms` } as CSSProperties)
    : undefined

  return (
    <Tag
      {...rest}
      className={cn(immediate ? 'reveal-load' : 'reveal', className)}
      style={style}
    >
      {children}
    </Tag>
  )
}
