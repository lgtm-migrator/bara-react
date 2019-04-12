import { createEventType, useEvent } from 'bara'

export interface BaraReactText {
  name?: string
  className?: string
  ref?: any
  id?: any
}

export const ON_TEXT_PRESS = createEventType('ON_TEXT_PRESS')
export const ON_TEXT_LONG_PRESS = createEventType('ON_TEXT_LONG_PRESS')

export type TextPressEventSource = (
  triggeringEvent: BaraReactText,
) => boolean | Promise<boolean>

export interface TextPressEventFilter {
  nameOf?: TextPressEventSource
  classOf?: TextPressEventSource
}

export const useTextPressEvent = () => useEvent(ON_TEXT_PRESS)
export const useTextLongPressEvent = () => useEvent(ON_TEXT_LONG_PRESS)
