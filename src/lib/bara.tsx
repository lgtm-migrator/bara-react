import { EventType, register, useInit, useEmitter, createEmitter, createEventType, useStream } from 'bara'
import React, { ComponentType, useEffect } from 'react'
import { AppRegistry } from 'react-native'

import { BaraProvider } from './context'

export const REACT_APP_STREAM_ID = 'dev.barajs.react'
export const REACT_APP_MOUNTED = createEventType('REACT_APP_MOUNTED')

export const withBara = (App: ComponentType, baraRegisters?: () => void) => {
  if (baraRegisters) {
    register(() => {

      const appEmitter = createEmitter(({ setName, addEventType }) => {
        setName(REACT_APP_STREAM_ID)
        addEventType(REACT_APP_MOUNTED)
      })

      useStream(({ emit, setName, addEventType }) => {
        setName(REACT_APP_STREAM_ID)
        addEventType(REACT_APP_MOUNTED)

        const onMounted = appEmitter.addListener(REACT_APP_MOUNTED, () => {
          emit(REACT_APP_MOUNTED)
        })

        return () => {
          onMounted.remove()
        }
      })

      baraRegisters()
    })
  }

  const getEmitter = (which: EventType) => {
    const emit = useEmitter(which)
    if (typeof emit === 'function') {
      return emit
    }
    return () => { }
  }

  return () => {
    useEffect(() => {
      getEmitter(REACT_APP_MOUNTED)()
    }, [])

    return (
      <BaraProvider>
        <App />
      </BaraProvider>
    )
  }
}

export interface UseReactAppConfig {
  name: string
  App: ComponentType
  isNative?: boolean
  rootHTML?: string
}

export const useReactApp = ({
  name,
  App,
  isNative = false,
  rootHTML = 'root',
}: UseReactAppConfig) => {
  useInit(() => {
    AppRegistry.registerComponent(name, () => withBara(App))
    if (!isNative) {
      AppRegistry.runApplication(name, {
        rootTag: document.getElementById(rootHTML),
      })
    }
  })
}
