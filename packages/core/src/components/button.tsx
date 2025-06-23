import React, {ButtonHTMLAttributes, ReactNode} from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

export const ctaButton = tv({
  base: 'inline-flex items-center max-w-[500px] hover:cursor-pointer',
  variants: {
    size: {
      large: 'h-[44px] py-[12px] px-[16px] gap-1 rounded-lg',
      medium: 'h-[32px] py-[6px] px-[12px] gap-1 rounded-lg',
      small: 'h-[28px] py-[6px] px-[12px] gap-1 rounded-lg'
    },
    design: {
      outline_light:
        'border border-greyscale-light-2 text-greyscale-light-2 hover:bg-greyscale-light-2 hover:text-greyscale-dark-1 hover:border-0',
      outline_dark:
        'border border-greyscale-dark-2 text-greyscale-dark-2 hover:bg-greyscale-dark-2 hover:text-greyscale-white hover:border-0',
      filled_light: 'bg-greyscale-light-2 text-greyscale-dark-1 hover:bg-pink hover:text-greyscale-white',
      filled_dark: 'bg-greyscale-dark-2 text-greyscale-white hover:bg-dark-pink hover:text-pink',
      filled_pink: 'bg-pink text-greyscale-white hover:bg-dark-pink hover:text-pink',
      neutral_dark: 'text-greyscale-dark-2 hover:bg-greyscale-light-2 hover:text-greyscale-dark-1',
      neutral_light: 'text-greyscale-light-2 hover:bg-greyscale-light-2 hover:text-greyscale-dark-1'
    },
    disabled: {
      true: 'pointer-events-none'
    }
  },
  compoundVariants: [
    {
      design: ['filled_dark', 'filled_pink'],
      disabled: true,
      class: 'bg-greyscale-light-1 text-greyscale-light-2'
    },
    {
      design: 'filled_light',
      disabled: true,
      class: 'text-greyscale-medium-3 bg-greyscale-light-1'
    },
    {
      design: 'outline_light',
      disabled: true,
      class: 'text-greyscale-medium-3 border-greyscale-medium-3'
    },
    {
      design: 'outline_dark',
      disabled: true,
      class: 'text-greyscale-light-1 border-greyscale-light-1'
    },
    {
      design: 'neutral_dark',
      disabled: true,
      class: 'text-greyscale-light-1'
    },
    {
      design: 'neutral_light',
      disabled: true,
      class: 'text-greyscale-medium-3'
    }
  ]
})

type CTAButtonVariants = VariantProps<typeof ctaButton>

export interface CTAButtonProps extends CTAButtonVariants, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  label: string
  icon?: React.ReactNode
}

export const CTAButton = ({ label, size, design, disabled = false, icon = undefined, ...props }: CTAButtonProps): ReactNode => {
  return (
    <button
      data-testid={`cta-button-${label}`}
      className={ctaButton({ size: size, design: design, disabled: disabled })}
      {...props}
    >
      {/* optional icon */}
      {icon && <>{icon}</>}

      {/* label */}
      <span>{label}</span>
    </button>
  )
}
