import { setBarnState, useBarn, useInit, useTimerElapsed } from 'bara'

import {
  nameOfText,
  nameOfTouchable,
  nameOfTouchableOpacity,
  useTextPress,
  useTouchableOpacityPress,
  useTouchablePress,
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

  useTouchablePress(
    {
      nameOf: nameOfTouchable('welcome-button'),
    },
    ({ name }) => {
      setBarnState('welcome', `You (${name}) are already welcomed!`)
    },
  )

  useTouchableOpacityPress(nameOfTouchableOpacity('greet-button'))(
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
