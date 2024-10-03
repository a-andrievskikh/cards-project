import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react'

import { Logout } from '@/assets/icons'
import { clsx } from 'clsx'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = ComponentPropsWithoutRef<T> &
  PropsWithChildren<{
    as?: T
    className?: string
    fullWidth?: boolean
    variant?: 'primary' | 'secondary'
    withIcon?: boolean
  }>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const {
    as: Component = 'button',
    children,
    className,
    fullWidth,
    variant = 'primary',
    withIcon = false,
    ...restProps
  } = props

  const classNames = clsx(s.button, s[variant], fullWidth && s.fullWidth, className)

  return (
    <Component className={classNames} {...restProps}>
      {withIcon && <Logout />}
      {children || 'some button'}
    </Component>
  )
}
