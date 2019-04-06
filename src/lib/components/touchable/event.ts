import { createEventType } from 'bara'

export interface BaraReactTouchable {
  name: string
}

export const ON_TOUCHABLE_PRESS = createEventType('ON_TOUCHABLE_PRESSED')
export const ON_TOUCHABLE_PRESS_IN = createEventType('ON_TOUCHABLE_PRESS_IN')
export const ON_TOUCHABLE_PRESS_OUT = createEventType('ON_TOUCHABLE_PRESS_OUT')
export const ON_TOUCHABLE_LONG_PRESS = createEventType(
  'ON_TOUCHABLE_LONG_PRESS',
)
