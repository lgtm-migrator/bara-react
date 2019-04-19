import { createEmitter, useEmitter, useStream } from 'bara'

import {
  BaraReactTouchableOpacity,
  ON_TOUCHABLE_OPACITY_LONG_PRESS,
  ON_TOUCHABLE_OPACITY_PRESS,
  ON_TOUCHABLE_OPACITY_PRESS_IN,
  ON_TOUCHABLE_OPACITY_PRESS_OUT,
} from './event'

export interface BaraTouchableOpacityContext {
  onPress: (data: BaraReactTouchableOpacity) => void
  onPressIn: (data: BaraReactTouchableOpacity) => void
  onPressOut: (data: BaraReactTouchableOpacity) => void
  onLongPress: (data: BaraReactTouchableOpacity) => void
}

// BaraJS Stream Register
export function useTouchableOpacityStream() {
  const emitter = createEmitter(({ setName, addEventType }) => {
    setName('dev.barajs.react.touchable-opacity.emitter')

    addEventType(ON_TOUCHABLE_OPACITY_LONG_PRESS)
    addEventType(ON_TOUCHABLE_OPACITY_PRESS)
    addEventType(ON_TOUCHABLE_OPACITY_PRESS_IN)
    addEventType(ON_TOUCHABLE_OPACITY_PRESS_OUT)
  })

  return useStream<BaraReactTouchableOpacity>(
    ({ setName, emit, addEventTypes }) => {
      setName('dev.barajs.react.touchableOpacity')
      addEventTypes([
        ON_TOUCHABLE_OPACITY_LONG_PRESS,
        ON_TOUCHABLE_OPACITY_PRESS,
        ON_TOUCHABLE_OPACITY_PRESS_IN,
        ON_TOUCHABLE_OPACITY_PRESS_OUT,
      ])

      const onPressListener = emitter.addListener(
        ON_TOUCHABLE_OPACITY_PRESS,
        (data: BaraReactTouchableOpacity) => {
          emit(ON_TOUCHABLE_OPACITY_PRESS, data)
        },
      )

      const onPressInListener = emitter.addListener(
        ON_TOUCHABLE_OPACITY_PRESS_IN,
        (data: BaraReactTouchableOpacity) => {
          emit(ON_TOUCHABLE_OPACITY_PRESS_IN, data)
        },
      )

      const onPressOutListener = emitter.addListener(
        ON_TOUCHABLE_OPACITY_PRESS_OUT,
        (data: BaraReactTouchableOpacity) => {
          emit(ON_TOUCHABLE_OPACITY_PRESS_OUT, data)
        },
      )

      const onLongPressListener = emitter.addListener(
        ON_TOUCHABLE_OPACITY_LONG_PRESS,
        (data: BaraReactTouchableOpacity) => {
          emit(ON_TOUCHABLE_OPACITY_LONG_PRESS, data)
        },
      )

      return () => {
        onPressListener.remove()
        onPressInListener.remove()
        onPressOutListener.remove()
        onLongPressListener.remove()
      }
    },
  )
}

// Export and being consumed by any Touchable component
export const touchableOpacityContext: BaraTouchableOpacityContext = {
  onPress: data => {
    const emit = useEmitter(ON_TOUCHABLE_OPACITY_PRESS)
    emit!(data)
  },
  onPressIn: data => {
    const emit = useEmitter(ON_TOUCHABLE_OPACITY_PRESS_IN)
    emit!(data)
  },
  onPressOut: data => {
    const emit = useEmitter(ON_TOUCHABLE_OPACITY_PRESS_OUT)
    emit!(data)
  },
  onLongPress: data => {
    const emit = useEmitter(ON_TOUCHABLE_OPACITY_LONG_PRESS)
    emit!(data)
  },
}
