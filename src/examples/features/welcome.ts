import { useTrigger } from 'bara'

import { nameOf, useTouchablePress } from '../../lib'

export function welcomeTrigger() {
  useTouchablePress(
    {
      nameOf: nameOf('welcome-button'),
    },
    () => {
      alert('Welcome button is clicked!')
    },
  )
}
