import { createEmitter, EventType, useEmitter, useStream } from 'bara'
import React from 'react'

import {
  BaraReactTouchable,
  ON_TOUCHABLE_LONG_PRESS,
  ON_TOUCHABLE_PRESS,
  ON_TOUCHABLE_PRESS_IN,
  ON_TOUCHABLE_PRESS_OUT,
} from './event'

export interface BaraTouchableContext {
  onPress: (data: BaraReactTouchable) => void
  onPressIn: (data: BaraReactTouchable) => void
  onPressOut: (data: BaraReactTouchable) => void
  onLongPress: (data: BaraReactTouchable) => void
}

export function useTouchableStream() {
  const emitter = createEmitter(({ setName, addEventType }) => {
    setName('dev.barajs.react.touchable.emitter')
    addEventType(ON_TOUCHABLE_LONG_PRESS)
    addEventType(ON_TOUCHABLE_PRESS)
    addEventType(ON_TOUCHABLE_PRESS_IN)
    addEventType(ON_TOUCHABLE_PRESS_OUT)
  })

  return useStream<BaraReactTouchable>(({ setName, emit, addEventTypes }) => {
    setName('dev.barajs.react.touchable')
    addEventTypes([
      ON_TOUCHABLE_LONG_PRESS,
      ON_TOUCHABLE_PRESS,
      ON_TOUCHABLE_PRESS_IN,
      ON_TOUCHABLE_PRESS_OUT,
    ])

    const onPressListener = emitter.addListener(
      ON_TOUCHABLE_PRESS,
      (data: BaraReactTouchable) => {
        emit(ON_TOUCHABLE_PRESS, data)
      },
    )

    const onPressInListener = emitter.addListener(
      ON_TOUCHABLE_PRESS_IN,
      (data: BaraReactTouchable) => {
        emit(ON_TOUCHABLE_PRESS_IN, data)
      },
    )

    const onPressOutListener = emitter.addListener(
      ON_TOUCHABLE_PRESS_OUT,
      (data: BaraReactTouchable) => {
        emit(ON_TOUCHABLE_PRESS_OUT, data)
      },
    )

    const onLongPressListener = emitter.addListener(
      ON_TOUCHABLE_LONG_PRESS,
      (data: BaraReactTouchable) => {
        emit(ON_TOUCHABLE_LONG_PRESS, data)
      },
    )

    return () => {
      onPressListener.remove()
      onPressInListener.remove()
      onPressOutListener.remove()
      onLongPressListener.remove()
    }
  })
}

const getEmitter = (eventType: EventType) => {
  let emit = useEmitter(eventType)
  const warn = () => {
    // tslint:disable-next-line
    process.env.NODE_ENV === 'development' && console.warn(
      `[Touchable] No action executed because Touchable is "false" when you call "useComponentsStream", call "useTouchableStream" to register this stream or change its value to "true"!`,
    )
  }
  emit = emit! || warn
  return emit
}

// Export and being consumed by any Touchable component
export const touchableContext: BaraTouchableContext = {
  onPress: data => getEmitter(ON_TOUCHABLE_PRESS)(data),
  onPressIn: data => getEmitter(ON_TOUCHABLE_PRESS_IN)(data),
  onPressOut: data => getEmitter(ON_TOUCHABLE_PRESS_OUT)(data),
  onLongPress: data => getEmitter(ON_TOUCHABLE_LONG_PRESS)(data),
}
