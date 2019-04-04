import { register } from 'bara'
import App from './App'
import './index.css'
import { useReactApp } from './lib'

const BaraApp = () => {
  useReactApp('bara-app', App)
}

register(BaraApp)
