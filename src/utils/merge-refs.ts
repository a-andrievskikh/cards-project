import { LegacyRef, MutableRefObject, RefCallback } from 'react'

export const mergeRefs =
  <T = any>(refs: Array<LegacyRef<T> | MutableRefObject<T> | null | undefined>): RefCallback<T> =>
  value => {
    refs.forEach(ref => {
      if (typeof ref === 'function') {
        ref(value)
      } else if (ref != null) {
        ;(ref as MutableRefObject<T | null>).current = value
      }
    })
  }
