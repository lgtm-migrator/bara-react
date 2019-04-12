import { useInit, useBarn, useTimerElapsed } from 'bara'

import {
  nameOfTouchable,
  nameOfTouchableOpacity,
  useTouchablePress,
  useTouchableOpacityPress,
  useTextPress,
  nameOfText,
} from '../../lib'

export function welcomeTrigger(setState: (key: string, value: any) => void) {
  useInit(() => {
    setState('welcome', `Loading...`)
    useBarn('welcome', newMessage => {
    })
  })

  useTouchablePress(
    {
      nameOf: nameOfTouchable('welcome-button'),
    },
    ({ name }) => {
      setState('welcome', `You (${name}) are already welcomed!`)
    },
  )

  useTouchableOpacityPress(
    {
      nameOf: nameOfTouchableOpacity('greet-button'),
    },
    ({ name }) => {
      alert(`${name} is PRESSED! YAY !!!`)
      console.log('hey, are you working?')
    },
  )

  useTimerElapsed(5, () => {
    setState('welcome', `Who are you?`)
  })

  useBarn('welcome', newMessage => {
    console.log(`Barn welcome changed to: ${newMessage}`)
  })
}
