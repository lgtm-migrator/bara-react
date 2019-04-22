import { register, useBarnStream, useInitStream } from 'bara'
import App from './App'
import './index.css'
import {
  useComponentsStream,
  useReactApp,
} from './lib'

import { welcomeTrigger } from './examples/features/welcome'

const BaraApp = () => {
  useInitStream()
  useBarnStream({
    version: '1.0.0',
    welcome: 'Welcome to Bara React App!',
  })
  useReactApp({ name: 'bara-app', App })
  useComponentsStream({TouchableOpacity: false})
  welcomeTrigger()
}

const bara = register(BaraApp)

if (process.env.NODE_ENV === 'development' || __DEV__) {
  if (window) {
    ;(window as any).__BARA__ = bara
  }
}
