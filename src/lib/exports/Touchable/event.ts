import { createEventType, useEvent } from 'bara'

export interface BaraReactTouchable {
  name?: string
  className?: string
  ref?: any
  id?: string
  event?: any
}

export const ON_TOUCHABLE_PRESS = createEventType('ON_TOUCHABLE_PRESSED')
export const ON_TOUCHABLE_PRESS_IN = createEventType('ON_TOUCHABLE_PRESS_IN')
export const ON_TOUCHABLE_PRESS_OUT = createEventType('ON_TOUCHABLE_PRESS_OUT')
export const ON_TOUCHABLE_LONG_PRESS = createEventType(
  'ON_TOUCHABLE_LONG_PRESS',
)

export type TouchableEventSource = (
  triggeringEvent: BaraReactTouchable,
) => boolean | Promise<boolean>

export interface TouchableEventFilter {
  nameOf?: TouchableEventSource
  classOf?: TouchableEventSource
}

export const useTouchablePressEvent = () => useEvent(ON_TOUCHABLE_PRESS)
export const useTouchablePressInEvent = () => useEvent(ON_TOUCHABLE_PRESS_IN)
export const useTouchablePressOutEvent = () => useEvent(ON_TOUCHABLE_PRESS_OUT)
export const useTouchableLongPressEvent = () =>
  useEvent(ON_TOUCHABLE_LONG_PRESS)
