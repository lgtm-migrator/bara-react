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
      onPressIn: _onPressIn,
      onPressOut: _onPressOut,
      onLongPress: _onLongPress,
      name,
      ...props
    }: TouchableBaseProps,
    ref: any,
  ) => {
    const context = useBaraContext()

    const onPress: typeof _onPress = e => {
      context.components.touchable.onPress({ name, ...props, event: e })
      if (_onPress) {
        _onPress(e)
      }
    }

    const onPressIn: typeof _onPressIn = e => {
      context.components.touchable.onPressIn({ name, ...props, event: e })
      if (_onPressIn) {
        _onPressIn(e)
      }
    }

    const onPressOut: typeof _onPressOut = e => {
      context.components.touchable.onPressOut({ name, ...props, event: e })
      if (_onPressOut) {
        _onPressOut(e)
      }
    }

    const onLongPress: typeof _onLongPress = e => {
      context.components.touchable.onLongPress({ name, ...props, event: e })
      if (_onLongPress) {
        _onLongPress(e)
      }
    }

    return (
      <TouchableComponent
        {...props}
        ref={ref}
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onLongPress={onLongPress}
      />
    )
  },
)

export const Touchable = React.forwardRef((props: TouchableProps, ref: any) => {
  return (
    <TouchableBase
      ref={ref}
      TouchableComponent={TouchableOpacity}
      activeOpacity={1}
      {...props}
    />
  )
})

export type Touchable = TouchableOpacity
