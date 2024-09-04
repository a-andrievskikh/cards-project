import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react'

import { clsx } from 'clsx'

import s from './typography.module.scss'

export type TypographyProps<T extends ElementType = 'p'> = ComponentPropsWithoutRef<T> &
  PropsWithChildren<{
    as?: T
    className?: string
    variant?:
      | 'body1'
      | 'body2'
      | 'caption'
      | 'h1'
      | 'h2'
      | 'h3'
      | 'h4'
      | 'link1'
      | 'link2'
      | 'overline'
      | 'subtitle1'
      | 'subtitle2'
  }>

export const Typography = <T extends ElementType = 'p'>(props: TypographyProps<T>) => {
  const { as: Component = 'p', children, className, variant = 'body1', ...restProps } = props

  const classNames = clsx(s.text, s[variant], className)

  return <Component className={classNames} {...restProps} />
}
