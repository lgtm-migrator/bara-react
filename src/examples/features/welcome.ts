import { setBarnState, useBarn, useInit, useTimerElapsed } from 'bara'

import {
  nameOfText,
  nameOfTouchable,
  nameOfTouchableOpacity,
  whenTextPress,
  whenTouchableOpacityPress,
  whenTouchablePress,
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

  whenTouchablePress(nameOfTouchable('welcome-button'))(({ name }) => {
    setBarnState('welcome', `You (${name}) are already welcomed!`)
  })

  whenTouchableOpacityPress(nameOfTouchableOpacity('greet-button'))(
    ({ name }: any) => {
      alert(`${name} is PRESSED! YAY !!!`)
    },
  )

  useTimerElapsed(5, () => {
    setBarnState('welcome', `Who are you?`)
  })

  useBarn('welcome', newMessage => {
    // tslint:disable-next-line
    console.log(`Barn welcome changed to: ${newMessage}`)
    return
  })
}
