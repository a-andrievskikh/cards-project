import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

import { clsx } from 'clsx'

import s from './card.module.scss'

export type CardProps = ComponentPropsWithoutRef<'div'> & PropsWithChildren<{}>

export const Card = ({ className, ...restProps }: CardProps) => {
  const classNames = clsx(s.card, className)

  return <div className={classNames} {...restProps}></div>
}
