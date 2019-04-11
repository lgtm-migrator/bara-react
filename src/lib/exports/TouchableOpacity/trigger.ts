import { useAction, useCondition, useEvent, useTrigger } from 'bara'
import {
  BaraReactTouchableOpacity,
  TouchableOpacityEventFilter,
  useTouchableOpacityPressEvent,
} from './event'

export type TouchableOpacityPressCallback = (
  touchableData: BaraReactTouchableOpacity,
) => void

export const useTouchableOpacityPressTrigger = (
  eventFilter: TouchableOpacityEventFilter,
  callback: TouchableOpacityPressCallback,
) => {
  return useTrigger<BaraReactTouchableOpacity>(() => {
    const event = useTouchableOpacityPressEvent()
    const condition = useCondition<BaraReactTouchableOpacity>(
      (triggeringEvent: BaraReactTouchableOpacity | undefined) => {
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
