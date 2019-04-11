import { register, useInit, useStream } from 'bara'
import React, { ComponentType } from 'react'

import { AppRegistry } from 'react-native-web'

const BaraApp = (AppComponent: ComponentType) => () => AppComponent

// TODO trigger render function when the bara app has been initialized
const render = (name: string, AppComponent: ComponentType) => {
  AppRegistry.registerComponent(name, BaraApp(AppComponent))
  AppRegistry.runApplication(name, {
    rootTag: document.getElementById('root'),
  })
}

const bridge = (name: string, App: ComponentType) => () => {
  useInit(() => {
    render(name, App)
  })
}

export const useReactApp = (name: string, App: ComponentType, rootHTML: string = 'root') => {
  bridge(name, App)()
}

export * from './exports'
export * from './functions'