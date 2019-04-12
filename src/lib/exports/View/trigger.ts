import { useAction, useCondition, useEvent, useTrigger } from 'bara'
import {
  BaraReactView,
  ViewEventFilter,
  useViewLayoutEvent,
} from './event'

export type ViewLayoutCallback = (viewData: BaraReactView) => void

export const useViewLayoutTrigger = (
  eventFilter: ViewEventFilter,
  callback: ViewLayoutCallback,
) => {
  return useTrigger<BaraReactView>(() => {
    const event = useViewLayoutEvent()
    const condition = useCondition<BaraReactView>(
      (triggeringEvent: BaraReactView | undefined) => {
        let flag = true
        flag =
          flag &&
          ((eventFilter.nameOf
            ? eventFilter.nameOf(triggeringEvent!)
            : flag) as boolean)
        flag =
          flag &&
          ((eventFilter.classOf
            ? eventFilter.classOf(triggeringEvent!)
            : flag) as boolean)
        return flag
      },
    )
    const action = useAction(callback)
    return { event, condition, action }
  })
}
