import React, { ReactNode } from 'react'
import {
  TouchableOpacity,
  TouchableOpacityProps,
  TouchableWithoutFeedbackProps,
} from 'react-native'

import { useBaraContext } from '../../context'
import { BaraBaseComponentProps, Omit } from '../../models'

export interface TouchableBaseProps
  extends BaraBaseComponentProps,
    TouchableOpacityProps,
    TouchableWithoutFeedbackProps {
  TouchableComponent: any
  children?: ReactNode
}

export interface TouchableProps
  extends Omit<TouchableBaseProps, 'TouchableComponent'> {
  TouchableComponent?: TouchableBaseProps['TouchableComponent']
}

export const TouchableBase = React.forwardRef(
  (
    {
      TouchableComponent,
      onPress: _onPress,
      name,
      ...props
    }: TouchableBaseProps,
    ref: any,
  ) => {
    const context = useBaraContext()
    const onPress: typeof _onPress = e => {
      context.components.touchable.onPress({ name, ...props })
      if (_onPress) {
        _onPress(e)
      }
    }
    return <TouchableComponent {...props} ref={ref} onPress={onPress} />
  },
)

export const Touchable = React.forwardRef(
  (props: TouchableProps, ref: any) => {
    return (
      <TouchableBase
        ref={ref}
        TouchableComponent={TouchableOpacity}
        activeOpacity={1}
        {...props}
      />
    )
  },
)

export type Touchable = TouchableOpacity
