import {
  ActionPipe,
  BaraEventPayload,
  ConditionPipe,
  createPipe,
  useAction,
  useTrigger,
} from 'bara'

import { BaraReactView, useViewLayoutEvent } from './event'

export const whenViewLayout = (
  ...conditions: Array<ConditionPipe<BaraReactView>>
) => (...actions: Array<ActionPipe<BaraReactView>>) => {
  const piper = (
    data: BaraReactView,
    payload: BaraEventPayload<BaraReactView>,
  ) => {
    createPipe(data, payload)(...(conditions as any))(...actions)
  }
  useTrigger<BaraReactView>(() => {
    const event = useViewLayoutEvent()
    const action = useAction(piper)
    return { event, action }
  })
}
