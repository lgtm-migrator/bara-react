import { createEventType, useEvent } from 'bara'

export interface BaraReactView {
  name?: string
  className?: string
  ref?: any
  id?: any
}

export const ON_VIEW_LAYOUT = createEventType('ON_VIEW_LAYOUT')

export const useViewLayoutEvent = () => useEvent(ON_VIEW_LAYOUT)
