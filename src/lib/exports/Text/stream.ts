import { useStream } from 'bara'
import { EventEmitter, EventSubscription } from 'fbemitter'

import { BaraReactText, ON_TEXT_PRESS, ON_TEXT_LONG_PRESS } from './event'

export interface BaraTextContext {
  onPress: (data: BaraReactText) => void
  onLongPress: (data: BaraReactText) => void
}

const emitter = new EventEmitter()

export const textContext: BaraTextContext = {
  onPress: data => {
    emitter.emit(ON_TEXT_PRESS(), data)
  },
  onLongPress: data => {
    emitter.emit(ON_TEXT_LONG_PRESS(), data)
  },
}

export function useTextStream() {
  return useStream<BaraReactText>(({ setName, emit, addEventTypes }) => {
    setName('dev.barajs.react.text')
    addEventTypes([ON_TEXT_PRESS, ON_TEXT_LONG_PRESS])

    const onPressListener = emitter.addListener(
      ON_TEXT_PRESS(),
      (data: BaraReactText) => {
        emit(ON_TEXT_PRESS, data)
      },
    )

    const onLongPressListener = emitter.addListener(
      ON_TEXT_LONG_PRESS(),
      (data: BaraReactText) => {
        emit(ON_TEXT_LONG_PRESS, data)
      },
    )

    return () => {
      onPressListener.remove()
      onLongPressListener.remove()
      emitter.removeAllListeners()
    }
  })
}
