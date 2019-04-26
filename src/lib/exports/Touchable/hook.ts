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

import { BaraReactTouchable, useTouchablePressEvent } from './event'
import { TouchablePressCallback, useTouchablePressTrigger } from './trigger'

export const whenTouchablePress = (
  ...conditions: Array<ConditionPipe<BaraReactTouchable>>
) => (...actions: Array<ActionPipe<BaraReactTouchable>>) => {
  const piper = (
    data: BaraReactTouchable,
    payload: BaraEventPayload<BaraReactTouchable>,
  ) => {
    createPipe(data, payload)(...(conditions as any))(...actions)
  }
  useTrigger<BaraReactTouchable>(() => {
    const event = useTouchablePressEvent()
    const action = useAction(piper)
    return { event, action }
  })
}
