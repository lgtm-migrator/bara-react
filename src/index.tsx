import { register } from 'bara'
import App from './App'
import './index.css'
import { useReactApp, useTouchableStream } from './lib'

import { welcomeTrigger } from './examples/features/welcome'

const BaraApp = () => {
  useReactApp('bara-app', App)
  useTouchableStream()
  welcomeTrigger()
}

const data = register(BaraApp)
console.log(data)
