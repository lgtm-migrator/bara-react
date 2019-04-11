import { createEventType, useEvent } from 'bara'

export interface BaraReactText {
  name?: string
  className?: string
  ref?: any
  id?: any
}

export const ON_TEXT_LAYOUT = createEventType('ON_TEXT_LAYOUT')

export const useTextLayoutEvent = () => useEvent(ON_TEXT_LAYOUT)
