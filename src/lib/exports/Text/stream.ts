import { useStream } from 'bara'
import { EventEmitter, EventSubscription } from 'fbemitter'

import { BaraReactText, ON_TEXT_LAYOUT } from './event'

export interface BaraTextContext {
  onLayout: (data: BaraReactText) => void
}

const emitter = new EventEmitter()

export const textContext: BaraTextContext = {
  onLayout: data => {
    emitter.emit(ON_TEXT_LAYOUT({ name: '' }), data)
  },
}

export function useTextStream() {
  return useStream<BaraReactText>(({ setName, emit, addEventTypes }) => {
    setName('dev.barajs.react.text')
    addEventTypes([ON_TEXT_LAYOUT])

    const onLayoutListener = emitter.addListener(
      ON_TEXT_LAYOUT({ name: '' }),
      (data: BaraReactText) => {
        emit(ON_TEXT_LAYOUT, data)
      },
    )

    return () => {
      onLayoutListener.remove()
      emitter.removeAllListeners()
    }
  })
}
