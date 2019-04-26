import { TouchableEventFilter } from './event'
import { TouchablePressCallback, useTouchablePressTrigger } from './trigger'

export function whenTouchablePress(
  eventFilter: TouchableEventFilter,
  callback: TouchablePressCallback,
) {
  return useTouchablePressTrigger(eventFilter, callback)
}
