import { register, useBarnStream } from 'bara'
import App from './App'
import './index.css'
import {
  mapBarnWithReact,
  useReactApp,
  useTextStream,
  useTouchableOpacityStream,
  useTouchableStream,
  useViewStream,
} from './lib'

import { welcomeTrigger } from './examples/features/welcome'

const BaraApp = () => {
  const [setState] = useBarnStream({
    version: '1.0.0',
    welcome: 'Welcome to Bara React App!',
  })
  useReactApp({ name: 'bara-app', App })
  mapBarnWithReact(setState)
  useViewStream()
  useTouchableStream()
  useTouchableOpacityStream()
  useTextStream()
  welcomeTrigger(setState)
}

const bara = register(BaraApp)

if (process.env.NODE_ENV === 'development' || __DEV__) {
  if (window) {
    (window as any).__BARA__ = bara
  }
}
