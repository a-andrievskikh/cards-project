import { ComponentPropsWithoutRef } from 'react'
import s from './button.module.scss'

export type ButtonProps = {
  variant?: 'primary' | 'secondary'
  fullWidth?: boolean
} & ComponentPropsWithoutRef<'button'>

export const Button = ({ className, fullWidth, variant = 'primary', ...rest }: ButtonProps) => {
  return (
    <button
      className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
      {...rest}
    />
  )
}
