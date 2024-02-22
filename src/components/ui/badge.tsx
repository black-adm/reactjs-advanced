import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const badge = tv({
  base: 'inline-block py-1 px-2 rounded-full font-semibold text-[0.625rem]',

  variants: {
    variant: {
      ghost: 'bg-slate-800 text-slate-500',
      primary: 'bg-lime-950 text-lime-300',
    },
  },

  defaultVariants: {
    variant: 'ghost',
  },
})

interface BadgeProps
  extends ComponentProps<'span'>,
    VariantProps<typeof badge> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={badge({ variant, className })} {...props} />
}
