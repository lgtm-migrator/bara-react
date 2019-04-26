import { setBarnState, useBarn, useInit, useTimerElapsed } from 'bara'

import {
  nameOfText,
  nameOfTouchable,
  nameOfTouchableOpacity,
  nameOfView,
  whenTextPress,
  whenTouchableOpacityPress,
  whenTouchablePress,
  whenViewLayout,
} from '../../lib'

export function welcomeTrigger() {
  useInit(() => {
    setBarnState('welcome', `Loading...`)
    useBarn('welcome', newMessage => {
      // tslint:disable-next-line
      console.log('Welcoming', newMessage)
      return
    })
  })

  whenViewLayout(nameOfView('main-container'))(data => {
    // tslint:disbale-next-line
    console.log('Main container is updating its layout', data)
  })

  whenTouchablePress(nameOfTouchable('welcome-button'))(({ name }) => {
    setBarnState('welcome', `You (${name}) are already welcomed!`)
  })

  whenTouchableOpacityPress(nameOfTouchableOpacity('greet-button'))(
    (data: any) => {
      alert(`${data.name} is PRESSED! YAY !!!`)
      // tslint:disbale-next-line
      console.log('greet-button', data)
    },
  )

  whenTextPress(nameOfText('pressable-text'))((data: any) => {
    // tslint:disbale-next-line
    console.log('pressable-text', data)
  })

  useTimerElapsed(5, () => {
    setBarnState('welcome', `Who are you?`)
  })

  useBarn('welcome', newMessage => {
    // tslint:disable-next-line
    console.log(`Barn welcome changed to: ${newMessage}`)
    return
  })
}
