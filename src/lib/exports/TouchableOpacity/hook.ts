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
  useTouchableOpacityLongPressEvent,
  useTouchableOpacityPressEvent,
  useTouchableOpacityPressInEvent,
  useTouchableOpacityPressOutEvent,
} from './event'

export const whenTouchableOpacityPress = (
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

export const whenTouchableOpacityPressIn = (
  ...conditions: Array<ConditionPipe<BaraReactTouchableOpacity>>
) => (...actions: Array<ActionPipe<BaraReactTouchableOpacity>>) => {
  const piper = (
    data: BaraReactTouchableOpacity,
    payload: BaraEventPayload<BaraReactTouchableOpacity>,
  ) => {
    createPipe(data, payload)(...(conditions as any))(...actions)
  }
  useTrigger<BaraReactTouchableOpacity>(() => {
    const event = useTouchableOpacityPressInEvent()
    const action = useAction(piper)
    return { event, action }
  })
}

export const whenTouchableOpacityPressOut = (
  ...conditions: Array<ConditionPipe<BaraReactTouchableOpacity>>
) => (...actions: Array<ActionPipe<BaraReactTouchableOpacity>>) => {
  const piper = (
    data: BaraReactTouchableOpacity,
    payload: BaraEventPayload<BaraReactTouchableOpacity>,
  ) => {
    createPipe(data, payload)(...(conditions as any))(...actions)
  }
  useTrigger<BaraReactTouchableOpacity>(() => {
    const event = useTouchableOpacityPressOutEvent()
    const action = useAction(piper)
    return { event, action }
  })
}

export const whenTouchableOpacityLongPress = (
  ...conditions: Array<ConditionPipe<BaraReactTouchableOpacity>>
) => (...actions: Array<ActionPipe<BaraReactTouchableOpacity>>) => {
  const piper = (
    data: BaraReactTouchableOpacity,
    payload: BaraEventPayload<BaraReactTouchableOpacity>,
  ) => {
    createPipe(data, payload)(...(conditions as any))(...actions)
  }
  useTrigger<BaraReactTouchableOpacity>(() => {
    const event = useTouchableOpacityLongPressEvent()
    const action = useAction(piper)
    return { event, action }
  })
}
