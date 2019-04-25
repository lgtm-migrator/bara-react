import React from 'react'
import { TouchableOpacity as TouchableOpacityOriginal } from 'react-native'
import { useBaraContext } from '../../context'
import { BaraBaseComponentProps, Omit } from '../../models'
import { Touchable, TouchableProps } from '../Touchable'

export interface TouchableOpacityProps
  extends Omit<TouchableProps, 'TouchableComponent'> {
  TouchableComponent?: TouchableProps['TouchableComponent']
}

export const TouchableOpacity = React.forwardRef(
  (
    {
      TouchableComponent,
      onPress: _onPress,
      onPressIn: _onPressIn,
      onPressOut: _onPressOut,
      onLongPress: _onLongPress,
      name,
      kind,
      ...props
    }: TouchableOpacityProps,
    ref: any,
  ) => {
    const context = useBaraContext()
    const onPress: typeof _onPress = e => {
      context.components.touchableOpacity.onPress({ name, kind, ...props })
      if (_onPress) {
        _onPress(e)
      }
    }

    const onPressIn: typeof _onPressIn = e => {
      context.components.touchableOpacity.onPressIn({ name, kind, ...props })
      if (_onPressIn) {
        _onPressIn(e)
      }
    }

    const onPressOut: typeof _onPressOut = e => {
      context.components.touchableOpacity.onPressOut({ name, kind, ...props })
      if (_onPressOut) {
        _onPressOut(e)
      }
    }

    const onLongPress: typeof _onLongPress = e => {
      context.components.touchableOpacity.onLongPress({ name, kind, ...props })
      if (_onLongPress) {
        _onLongPress(e)
      }
    }

    return (
      <Touchable
        ref={ref}
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onLongPress={onLongPress}
        TouchableComponent={TouchableOpacityOriginal}
        activeOpacity={0.5}
        {...props}
      />
    )
  },
)

export type TouchableOpacity = TouchableOpacityOriginal
