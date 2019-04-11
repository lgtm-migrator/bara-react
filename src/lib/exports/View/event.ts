import { createEventType, useEvent } from 'bara'

export interface BaraReactView {
  name?: string
  className?: string
  ref?: any
  id?: any
}

export const ON_VIEW_LAYOUT = createEventType('ON_VIEW_LAYOUT')

export type ViewEventSource = (
  triggeringEvent: BaraReactView,
) => boolean | Promise<boolean>

export interface ViewEventFilter {
  nameOf?: ViewEventSource
  classOf?: ViewEventSource
}

export const useViewLayoutEvent = () => useEvent(ON_VIEW_LAYOUT)
