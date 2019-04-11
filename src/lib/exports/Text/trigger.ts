import { useAction, useCondition, useEvent, useTrigger } from 'bara'
import {
  BaraReactText,
  TextPressEventFilter,
  useTextPressEvent,
} from './event'

export type TextPressCallback = (textData: BaraReactText) => void

export const useTextPressTrigger = (
  eventFilter: TextPressEventFilter,
  callback: TextPressCallback,
) => {
  return useTrigger<BaraReactText>(() => {
    const event = useTextPressEvent()
    const condition = useCondition<BaraReactText>(
      (triggeringEvent: BaraReactText | undefined) => {
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
