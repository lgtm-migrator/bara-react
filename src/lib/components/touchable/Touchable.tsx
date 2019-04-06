import React, { ReactNode } from 'react'
import {
  TouchableOpacity,
  TouchableOpacityProps,
  TouchableWithoutFeedbackProps,
} from 'react-native'

import { useBaraContext } from '../../context'

export interface TouchableProps
  extends TouchableOpacityProps,
    TouchableWithoutFeedbackProps {
  TouchableComponent: any
  children?: ReactNode
}

export const Touchable = React.forwardRef(
  (
    { TouchableComponent, onPress: _onPress, ...props }: TouchableProps,
    ref: any,
  ) => {
    const context = useBaraContext()
    const onPress: typeof _onPress = e => {
      context.touchable.onPress()
      if (_onPress) {
        _onPress(e)
      }
    }
    return <TouchableComponent {...props} ref={ref} onPress={onPress} />
  },
)

export type Touchable = TouchableOpacity
