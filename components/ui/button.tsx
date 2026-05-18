'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-none',
        secondary_old:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',

        // Custom Variants
        primary:
          'bg-black text-[#55f89f] border border-[#215237] rounded-none transition-all duration-300 hover:border-[#55f89f] z-10 font-geist',
        secondary:
          'bg-[#55f89f] text-black rounded-none relative overflow-hidden z-10 before:absolute before:inset-0 before:-z-10 before:bg-[#34c477] before:transition-transform before:ease-in-out font-geist',
      },
      size: {
        default: 'h-10 px-4 py-2',
        small: 'h-8 px-3',
        large: 'h-12 px-8',
        icon: 'h-10 w-10',
      },
      state: {
        default: 'cursor-pointer',
        disabled: 'pointer-events-none opacity-80 cursor-not-allowed',
        loading: 'pointer-events-none opacity-80 cursor-wait',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      state: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      state,
      asChild = false,
      onMouseEnter,
      onMouseLeave,
      ...props
    },
    ref
  ) => {
    const [slidePhase, setSlidePhase] = React.useState<
      'rest' | 'enter' | 'exit'
    >('rest')
    const exitTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(
      null
    )
    const isSecondary = variant === 'secondary'

    const secondarySlideClass = isSecondary
      ? slidePhase === 'rest'
        ? 'before:translate-x-[-100%] before:duration-0'
        : slidePhase === 'enter'
          ? 'before:translate-x-0 before:duration-300'
          : 'before:translate-x-[100%] before:duration-300'
      : ''

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (isSecondary) {
        if (exitTimeoutRef.current) clearTimeout(exitTimeoutRef.current)
        setSlidePhase('enter')
      }
      onMouseEnter?.(e)
    }

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (isSecondary) {
        setSlidePhase('exit')
        exitTimeoutRef.current = setTimeout(() => setSlidePhase('rest'), 300)
      }
      onMouseLeave?.(e)
    }

    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, state, className }),
          secondarySlideClass
        )}
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
