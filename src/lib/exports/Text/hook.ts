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

import { BaraReactText, useTextLongPressEvent, useTextPressEvent } from './event'
import { TextPressCallback, useTextPressTrigger } from './trigger'

export const whenTextPress = (
  ...conditions: Array<ConditionPipe<BaraReactText>>
) => (...actions: Array<ActionPipe<BaraReactText>>) => {
  const piper = (
    data: BaraReactText,
    payload: BaraEventPayload<BaraReactText>,
  ) => {
    createPipe(data, payload)(...(conditions as any))(...actions)
  }
  useTrigger<BaraReactText>(() => {
    const event = useTextPressEvent()
    const action = useAction(piper)
    return { event, action }
  })
}

export const whenTextLongPress = (
  ...conditions: Array<ConditionPipe<BaraReactText>>
) => (...actions: Array<ActionPipe<BaraReactText>>) => {
  const piper = (
    data: BaraReactText,
    payload: BaraEventPayload<BaraReactText>,
  ) => {
    createPipe(data, payload)(...(conditions as any))(...actions)
  }
  useTrigger<BaraReactText>(() => {
    const event = useTextLongPressEvent()
    const action = useAction(piper)
    return { event, action }
  })
}
