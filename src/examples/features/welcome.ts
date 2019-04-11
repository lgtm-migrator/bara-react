import { useInit, useBarn, useTimerElapsed } from 'bara'

import {
  nameOfTouchable,
  useTouchablePress,
  useTextPress,
  nameOfText,
} from '../../lib'

export function welcomeTrigger(setState: (key: string, value: any) => void) {
  useInit(() => {
    setState('welcome', `Loading...`)
    useBarn('welcome', newMessage => {
      console.log('hey Barn, you are now initiated!')
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

  useTextPress(
    {
      nameOf: nameOfText('no-greet'),
    },
    ({ name }) => {
      setState('welcome', `You (${name}) are already welcomed!`)
      alert(`${name} text is PRESSED! YAY !!!`)
    },
  )

  useTimerElapsed(5, () => {
    setState('welcome', `Who are you?`)
  })

  useBarn('welcome', newMessage => {
    console.log(`Barn welcome changed to: ${newMessage}`)
  })
}
