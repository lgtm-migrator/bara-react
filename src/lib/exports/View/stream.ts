import { useStream } from 'bara'
import { EventEmitter } from 'fbemitter'

import { BaraReactView, ON_VIEW_LAYOUT } from './event'

export interface BaraViewContext {
  onLayout: (data: BaraReactView) => void
}

const emitter = new EventEmitter()

export const viewContext: BaraViewContext = {
  onLayout: data => {
    emitter.emit(ON_VIEW_LAYOUT({ name: '' }), data)
  },
}

export function useViewStream() {
  return useStream<BaraReactView>(({ setName, emit, addEventTypes }) => {
    setName('dev.barajs.react.view')
    addEventTypes([ON_VIEW_LAYOUT])

    const onLayoutListener = emitter.addListener(
      ON_VIEW_LAYOUT({ name: '' }),
      (data: BaraReactView) => {
        emit(ON_VIEW_LAYOUT, data)
      },
    )

    return () => {
      onLayoutListener.remove()
      emitter.removeAllListeners()
    }
  })
}
