import { useTrigger } from 'bara'

import { nameOf, useTouchablePress } from '../../lib'

export function welcomeTrigger() {
  useTouchablePress(
    {
      nameOf: nameOf('welcome-button'),
    },
    ({name}) => {
      alert(`${name} button is clicked`)
    },
  )

  useTouchablePress({}, (data) => {
    console.log('Touchable is press:', data)
  })
}
