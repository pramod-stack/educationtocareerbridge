import type { ComponentProps } from 'react'
import type { VariantProps } from 'class-variance-authority'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

/**
 * An anchor styled like a Button.
 *
 * Navigation is a link, not a button, so we render a real <a> and borrow the
 * Button's visual variants instead of forcing the Base UI Button primitive to
 * render as an anchor (which strips native button semantics).
 */
export function ButtonLink({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ComponentProps<'a'> & VariantProps<typeof buttonVariants>) {
  return (
    <a
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}
