import { register, useInit, useStream } from 'bara'
import React, { ComponentType } from 'react'

import { AppRegistry } from 'react-native'

const BaraApp = (AppComponent: ComponentType) => () => AppComponent

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
    AppRegistry.registerComponent(name, BaraApp(App))
    if (!isNative) {
      AppRegistry.runApplication(name, {
        rootTag: document.getElementById(rootHTML),
      })
    }
  })
}

export * from './exports'
export * from './functions'
export * from './models'
export * from './context'
