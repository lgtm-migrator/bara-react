import { useStream } from 'bara'
import { EventEmitter, EventSubscription } from 'fbemitter'
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

// Emitter handle the reference with React Component via Context API
const emitter = new EventEmitter()

// Export and being consumed by any Touchable component
export const touchableContext: BaraTouchableContext = {
  onPress: data => {
    emitter.emit(ON_TOUCHABLE_PRESS({ name: '' }), data)
  },
  onPressIn: data => {
    emitter.emit(ON_TOUCHABLE_PRESS_IN({ name: '' }), data)
  },
  onPressOut: data => {
    emitter.emit(ON_TOUCHABLE_PRESS_OUT({ name: '' }), data)
  },
  onLongPress: data => {
    emitter.emit(ON_TOUCHABLE_LONG_PRESS({ name: '' }), data)
  },
}

// BaraJS Stream Register
export function useTouchableStream() {
  return useStream<BaraReactTouchable>(({ setName, emit, addEventTypes }) => {
    setName('dev.barajs.react.touchable')
    addEventTypes([
      ON_TOUCHABLE_LONG_PRESS,
      ON_TOUCHABLE_PRESS,
      ON_TOUCHABLE_PRESS_IN,
      ON_TOUCHABLE_PRESS_OUT,
    ])

    const onPressListener = emitter.addListener(
      ON_TOUCHABLE_PRESS({ name: '' }),
      (data: BaraReactTouchable) => {
        emit(ON_TOUCHABLE_PRESS, data)
      },
    )

    const onPressInListener = emitter.addListener(
      ON_TOUCHABLE_PRESS_IN({ name: '' }),
      (data: BaraReactTouchable) => {
        emit(ON_TOUCHABLE_PRESS_IN, data)
      },
    )

    const onPressOutListener = emitter.addListener(
      ON_TOUCHABLE_PRESS_OUT({ name: '' }),
      (data: BaraReactTouchable) => {
        emit(ON_TOUCHABLE_PRESS_OUT, data)
      },
    )

    const onLongPressListener = emitter.addListener(
      ON_TOUCHABLE_LONG_PRESS({ name: '' }),
      (data: BaraReactTouchable) => {
        emit(ON_TOUCHABLE_LONG_PRESS, data)
      },
    )

    return () => {
      onPressListener.remove()
      onPressInListener.remove()
      onPressOutListener.remove()
      onLongPressListener.remove()
      emitter.removeAllListeners()
    }
  })
}
