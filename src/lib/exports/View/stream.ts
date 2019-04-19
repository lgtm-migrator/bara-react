import { createEmitter, useEmitter, useStream } from 'bara'

import { BaraReactView, ON_VIEW_LAYOUT } from './event'

export interface BaraViewContext {
  onLayout: (data: BaraReactView) => void
}

export function useViewStream() {
  const emitter = createEmitter(({ setName, addEventType }) => {
    setName('dev.barajs.react.view.emitter')
    addEventType(ON_VIEW_LAYOUT)
  })

  return useStream<BaraReactView>(({ setName, emit, addEventTypes }) => {
    setName('dev.barajs.react.view')
    addEventTypes([ON_VIEW_LAYOUT])

    const onLayoutListener = emitter.addListener(
      ON_VIEW_LAYOUT,
      (data: BaraReactView) => {
        emit(ON_VIEW_LAYOUT, data)
      },
    )

    return () => {
      onLayoutListener.remove()
    }
  })
}

export const viewContext: BaraViewContext = {
  onLayout: data => {
    const emit = useEmitter(ON_VIEW_LAYOUT)
    emit!(data)
  },
}
