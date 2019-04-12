import { useStream } from 'bara'
import { EventEmitter } from 'fbemitter'

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

// Emitter handle the reference with React Component via Context API
const emitter = new EventEmitter()

// Export and being consumed by any Touchable component
export const touchableOpacityContext: BaraTouchableOpacityContext = {
  onPress: data => {
    emitter.emit(ON_TOUCHABLE_OPACITY_PRESS(), data)
  },
  onPressIn: data => {
    emitter.emit(ON_TOUCHABLE_OPACITY_PRESS_IN(), data)
  },
  onPressOut: data => {
    emitter.emit(ON_TOUCHABLE_OPACITY_PRESS_OUT(), data)
  },
  onLongPress: data => {
    emitter.emit(ON_TOUCHABLE_OPACITY_LONG_PRESS(), data)
  },
}

// BaraJS Stream Register
export function useTouchableOpacityStream() {
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
        ON_TOUCHABLE_OPACITY_PRESS(),
        (data: BaraReactTouchableOpacity) => {
          emit(ON_TOUCHABLE_OPACITY_PRESS, data)
        },
      )

      const onPressInListener = emitter.addListener(
        ON_TOUCHABLE_OPACITY_PRESS_IN(),
        (data: BaraReactTouchableOpacity) => {
          emit(ON_TOUCHABLE_OPACITY_PRESS_IN, data)
        },
      )

      const onPressOutListener = emitter.addListener(
        ON_TOUCHABLE_OPACITY_PRESS_OUT(),
        (data: BaraReactTouchableOpacity) => {
          emit(ON_TOUCHABLE_OPACITY_PRESS_OUT, data)
        },
      )

      const onLongPressListener = emitter.addListener(
        ON_TOUCHABLE_OPACITY_LONG_PRESS(),
        (data: BaraReactTouchableOpacity) => {
          emit(ON_TOUCHABLE_OPACITY_LONG_PRESS, data)
        },
      )

      return () => {
        onPressListener.remove()
        onPressInListener.remove()
        onPressOutListener.remove()
        onLongPressListener.remove()
        emitter.removeAllListeners()
      }
    },
  )
}
