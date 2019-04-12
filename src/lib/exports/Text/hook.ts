import { TextPressEventFilter } from './event'
import { TextPressCallback, useTextPressTrigger } from './trigger'

export function useTextPress(
  eventFilter: TextPressEventFilter,
  callback: TextPressCallback,
) {
  return useTextPressTrigger(eventFilter, callback)
}
