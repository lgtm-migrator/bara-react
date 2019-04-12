import { ViewEventFilter } from './event'
import { ViewLayoutCallback, useViewLayoutTrigger } from './trigger'

export function useViewLayout(
  eventFilter: ViewEventFilter,
  callback: ViewLayoutCallback,
) {
  return useViewLayoutTrigger(eventFilter, callback)
}
