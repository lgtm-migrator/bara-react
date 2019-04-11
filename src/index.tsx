import { register } from 'bara'
import App from './App'
import './index.css'
import { useReactApp, useTouchableStream, useTextStream } from './lib'

import { welcomeTrigger } from './examples/features/welcome'

const BaraApp = () => {
  useReactApp('bara-app', App)
  useTouchableStream()
  useTextStream()
  welcomeTrigger()
}

const data = register(BaraApp)
console.log(data)
