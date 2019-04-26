import { createEmitter, EventType, useEmitter, useStream } from 'bara'

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

const getEmitter = (eventType: EventType) => {
  let emit = useEmitter(eventType)
  const warn = () => {
    // tslint:disable-next-line
    process.env.NODE_ENV === 'development' && console.warn(
      `[View] No action executed because View is "false" when you call "useComponentsStream", call "useViewStream" to register this stream or change its value to "true"!`,
    )
  }
  emit = emit! || warn
  return emit
}

export const viewContext: BaraViewContext = {
  onLayout: data => getEmitter(ON_VIEW_LAYOUT)(data),
}
