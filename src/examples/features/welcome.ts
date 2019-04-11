import { useTrigger } from 'bara'

import { nameOf, useTouchablePress, useTextPress, textName } from '../../lib'

export function welcomeTrigger() {
  useTouchablePress(
    {
      nameOf: nameOf('welcome-button'),
    },
    ({ name }) => {
      alert(`${name} button is clicked`)
    },
  )

  useTextPress(
    {
      nameOf: textName('no-greet'),
    },
    ({ name }) => {
      alert(`${name} text is PRESSED! YAY !!!`)
    },
  )
}
