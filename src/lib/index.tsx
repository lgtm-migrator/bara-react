import { register, useStream } from 'bara'
import React, { ComponentType } from 'react'

import { AppRegistry } from 'react-native-web'

const BaraApp = (AppComponent: ComponentType) => () => AppComponent

// TODO trigger render function when the bara app has been initialized
const render = (name: string, AppComponent: ComponentType) => {
  console.log(AppComponent, typeof AppComponent)
  AppRegistry.registerComponent(name, BaraApp(AppComponent))
  AppRegistry.runApplication(name, {
    rootTag: document.getElementById('root'),
  })
}

const bridge = (name: string, App: ComponentType) => () => {
  render(name, App) // TODO manually call render function here
}

export const useReactApp = (name: string, App: ComponentType) => {
  bridge(name, App)()
}
