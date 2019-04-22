import {
  ActionPipe,
  BaraEventPayload,
  ConditionPipe,
  createPipe,
  useAction,
  useCondition,
  useEvent,
  useTrigger,
} from 'bara'

import {
  BaraReactTouchableOpacity,
  TouchableOpacityEventFilter,
  useTouchableOpacityPressEvent,
} from './event'

export const useTouchableOpacityPress = (
  ...conditions: Array<ConditionPipe<BaraReactTouchableOpacity>>
) => (...actions: Array<ActionPipe<BaraReactTouchableOpacity>>) => {
  const piper = (
    data: BaraReactTouchableOpacity,
    payload: BaraEventPayload<BaraReactTouchableOpacity>,
  ) => {
    createPipe(data, payload)(...(conditions as any))(...actions)
  }
  useTrigger<BaraReactTouchableOpacity>(() => {
    const event = useTouchableOpacityPressEvent()
    const action = useAction(piper)
    return { event, action }
  })
}
