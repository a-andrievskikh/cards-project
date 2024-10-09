import {
  ChangeEvent,
  ComponentProps,
  ComponentPropsWithoutRef,
  forwardRef,
  useId,
  useRef,
  useState,
} from 'react'

import { Close, Eye, Search, VisibilityOff } from '@/assets'
import { Typography } from '@/components'
import { mergeRefs } from '@/utils/merge-refs'
import { clsx } from 'clsx'

import s from './text-field.module.scss'

export type TextFieldProps = {
  containerProps?: ComponentProps<'div'>
  errorMessage?: string
  label?: string
  labelProps?: ComponentProps<'label'>
  onClearInput?: () => void
  onValueChange?: (value: string) => void
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      containerProps,
      errorMessage,
      id,
      label,
      labelProps,
      onChange,
      onClearInput,
      onValueChange,
      placeholder,
      type,
      ...restProps
    },
    forwardedRef
  ) => {
    const generatedId = useId()
    const finalId = id || generatedId
    const internalRef = useRef<HTMLInputElement | null>(null)
    const finalRef = mergeRefs([forwardedRef, internalRef])
    const [revealPassword, setRevealPassword] = useState(false)

    const isRevealPasswordButtonShown = type === 'password'
    const isSearchField = type === 'search'
    const isClearInputButtonShown = isSearchField

    const getFinalType = (
      type: ComponentProps<'input'>['type'],
      showPassword: boolean
    ): ComponentProps<'input'>['type'] => {
      if (type === 'password' && showPassword) {
        return 'text'
      }

      return type
    }

    const finalType = getFinalType(type, revealPassword)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onValueChange?.(e.target.value)
    }

    const handleToggleShowPassword = () => {
      setRevealPassword((prevState: boolean) => !prevState)
    }

    const handleClearInput = () => {
      if (onClearInput) {
        return onClearInput()
      }

      if (!internalRef.current) {
        return
      }
      internalRef.current.value = ''
      onValueChange?.('')
    }

    const classNames = {
      error: clsx(s.error),
      field: clsx(s.field, !!errorMessage && s.error, isSearchField && s.hasLeadingIcon, className),
      fieldContainer: clsx(s.fieldContainer),
      label: clsx(s.label, labelProps?.className),
      leadingIcon: clsx(s.leadingIcon),
      root: clsx(s.root, containerProps?.className),
    }

    return (
      <div {...containerProps} className={classNames.root}>
        {label && (
          <Typography
            {...labelProps}
            as={'label'}
            className={classNames.label}
            htmlFor={finalId}
            variant={'body2'}
          >
            {label}
          </Typography>
        )}
        <div className={classNames.fieldContainer}>
          {isSearchField && (
            <Search
              className={classNames.leadingIcon}
              onClick={() => internalRef.current?.focus()}
            />
          )}
          <input
            className={classNames.field}
            id={finalId}
            onChange={handleChange}
            placeholder={placeholder}
            ref={finalRef}
            type={finalType}
            {...restProps}
          />
          {isRevealPasswordButtonShown && (
            <button className={s.showPassword} onClick={handleToggleShowPassword} type={'button'}>
              {revealPassword ? <VisibilityOff /> : <Eye />}
            </button>
          )}
          {isClearInputButtonShown && (
            <button className={s.clearInput} onClick={handleClearInput} type={'button'}>
              <Close height={16} width={16} />
            </button>
          )}
        </div>

        <Typography className={classNames.error} variant={'error'}>
          {errorMessage}
        </Typography>
      </div>
    )
  }
)
