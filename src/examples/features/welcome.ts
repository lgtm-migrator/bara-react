import { useInit, useBarn, useTimerElapsed } from 'bara'

import { nameOf, useTouchablePress, useTextPress, textName } from '../../lib'

export function welcomeTrigger(setState: (key: string, value: any) => void) {
  useInit(() => {
    setState('welcome', `Loading...`)
  })

  useTouchablePress(
    {
      nameOf: nameOf('welcome-button'),
    },
    ({ name }) => {
      setState('welcome', `You (${name}) are already welcomed!`)
    },
  )

  useTextPress(
    {
      nameOf: textName('no-greet'),
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
