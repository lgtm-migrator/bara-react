import { createEventType, useEvent } from 'bara'

import { BaraBaseComponentProps } from '../../models'

export interface BaraReactTouchableOpacity extends BaraBaseComponentProps {
  name?: string
  ref?: any
}

export const ON_TOUCHABLE_OPACITY_PRESS = createEventType(
  'ON_TOUCHABLE_OPACITY_PRESSED',
)
export const ON_TOUCHABLE_OPACITY_PRESS_IN = createEventType(
  'ON_TOUCHABLE_OPACITY_PRESS_IN',
)
export const ON_TOUCHABLE_OPACITY_PRESS_OUT = createEventType(
  'ON_TOUCHABLE_OPACITY_PRESS_OUT',
)
export const ON_TOUCHABLE_OPACITY_LONG_PRESS = createEventType(
  'ON_TOUCHABLE_OPACITY_LONG_PRESS',
)

export type TouchableOpacityEventSource = (
  triggeringEvent: BaraReactTouchableOpacity,
) => boolean | Promise<boolean>

export interface TouchableOpacityEventFilter {
  nameOf?: TouchableOpacityEventSource
  classOf?: TouchableOpacityEventSource
}

export const useTouchableOpacityPressEvent = () =>
  useEvent(ON_TOUCHABLE_OPACITY_PRESS)
export const useTouchableOpacityPressInEvent = () =>
  useEvent(ON_TOUCHABLE_OPACITY_PRESS_IN)
export const useTouchableOpacityPressOutEvent = () =>
  useEvent(ON_TOUCHABLE_OPACITY_PRESS_OUT)
export const useTouchableOpacityLongPressEvent = () =>
  useEvent(ON_TOUCHABLE_OPACITY_LONG_PRESS)
