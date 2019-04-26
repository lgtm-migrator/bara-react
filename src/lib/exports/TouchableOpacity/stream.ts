import { createEmitter, EventType, useEmitter, useStream } from 'bara'

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

const getEmitter = (eventType: EventType) => {
  let emit = useEmitter(eventType)
  const warn = () => {
    // tslint:disable-next-line
    process.env.NODE_ENV === 'development' && console.warn(
      `[TouchableOpacity] No action executed because TouchableOpacity is "false" when you call "useComponentsStream", call "useTouchableOpacityStream" to register this stream or change its value to "true"!`,
    )
  }
  emit = emit! || warn
  return emit
}

// Export and being consumed by any Touchable component
export const touchableOpacityContext: BaraTouchableOpacityContext = {
  onPress: data => getEmitter(ON_TOUCHABLE_OPACITY_PRESS)(data),
  onPressIn: data => getEmitter(ON_TOUCHABLE_OPACITY_PRESS_IN)(data),
  onPressOut: data => getEmitter(ON_TOUCHABLE_OPACITY_PRESS_OUT)(data),
  onLongPress: data => getEmitter(ON_TOUCHABLE_OPACITY_LONG_PRESS)(data),
}
