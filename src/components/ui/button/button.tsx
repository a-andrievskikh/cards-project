import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react'

import { clsx } from 'clsx'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = ComponentPropsWithoutRef<T> &
  PropsWithChildren<{
    as?: T
    className?: string
    fullWidth?: boolean
    variant?: 'primary' | 'secondary'
  }>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const {
    as: Component = 'button',
    className,
    fullWidth,
    variant = 'primary',
    ...restProps
  } = props

  return (
    <Component
      className={clsx(s.button, s[variant], fullWidth && s.fullWidth, className)}
      {...restProps}
    />
  )
}
