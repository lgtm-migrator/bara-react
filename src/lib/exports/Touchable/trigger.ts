import { useAction, useCondition, useEvent, useTrigger } from 'bara'
import {
  BaraReactTouchable,
  TouchableEventFilter,
  useTouchablePressEvent,
} from './event'

export type TouchablePressCallback = (touchableData: BaraReactTouchable) => void

export const useTouchablePressTrigger = (
  eventFilter: TouchableEventFilter,
  callback: TouchablePressCallback,
) => {
  return useTrigger<BaraReactTouchable>(() => {
    const event = useTouchablePressEvent()
    const condition = useCondition<BaraReactTouchable>(
      (triggeringEvent: BaraReactTouchable | undefined) => {
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
