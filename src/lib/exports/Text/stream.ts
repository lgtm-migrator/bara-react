import { createEmitter, useEmitter, useStream } from 'bara'

import { BaraReactText, ON_TEXT_LONG_PRESS, ON_TEXT_PRESS } from './event'

export interface BaraTextContext {
  onPress: (data: BaraReactText) => void
  onLongPress: (data: BaraReactText) => void
}

export function useTextStream() {
  const emitter = createEmitter(({ setName, addEventType }) => {
    setName('dev.barajs.react.text.emitter')
    addEventType(ON_TEXT_PRESS)
    addEventType(ON_TEXT_LONG_PRESS)
  })

  return useStream<BaraReactText>(({ setName, emit, addEventTypes }) => {
    setName('dev.barajs.react.text')
    addEventTypes([ON_TEXT_PRESS, ON_TEXT_LONG_PRESS])

    const onPressListener = emitter.addListener(
      ON_TEXT_PRESS,
      (data: BaraReactText) => {
        emit(ON_TEXT_PRESS, data)
      },
    )

    const onLongPressListener = emitter.addListener(
      ON_TEXT_LONG_PRESS,
      (data: BaraReactText) => {
        emit(ON_TEXT_LONG_PRESS, data)
      },
    )

    return () => {
      onPressListener.remove()
      onLongPressListener.remove()
    }
  })
}

export const textContext: BaraTextContext = {
  onPress: data => {
    const emit = useEmitter(ON_TEXT_PRESS)
    emit!(data)
  },
  onLongPress: data => {
    const emit = useEmitter(ON_TEXT_LONG_PRESS)
    emit!(data)
  },
}

