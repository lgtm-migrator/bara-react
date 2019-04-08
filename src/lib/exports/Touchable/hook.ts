import { TouchableEventFilter } from './event'
import { TouchablePressCallback, useTouchablePressTrigger } from './trigger'

export function useTouchablePress(
  eventFilter: TouchableEventFilter,
  callback: TouchablePressCallback,
) {
  return useTouchablePressTrigger(eventFilter, callback)
}
