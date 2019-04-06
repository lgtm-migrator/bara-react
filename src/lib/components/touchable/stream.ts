import { useStream } from 'bara'
import React, { useRef } from 'react'

import {
  BaraReactTouchable,
  ON_TOUCHABLE_LONG_PRESS,
  ON_TOUCHABLE_PRESS,
  ON_TOUCHABLE_PRESS_IN,
  ON_TOUCHABLE_PRESS_OUT,
} from './event'

export const useTouchableStream = (producer: any) => {
  return true
  // return useStream<any>(({ setName, addEventTypes }) => {
  // setName('dev.barajs.react.touchable')
  // addEventTypes([
  // ON_TOUCHABLE_LONG_PRESS,
  // ON_TOUCHABLE_PRESS,
  // ON_TOUCHABLE_PRESS_IN,
  // ON_TOUCHABLE_PRESS_OUT,
  // ])
  // })
}
