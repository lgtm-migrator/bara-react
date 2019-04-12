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
      name,
      ...props
    }: TouchableOpacityProps,
    ref: any,
  ) => {
    const context = useBaraContext()
    const onPress: typeof _onPress = e => {
      context.components.touchableOpacity.onPress({ name, ...props })
      if (_onPress) {
        _onPress(e)
      }
    }
    return (
      <Touchable
        ref={ref}
        onPress={onPress}
        TouchableComponent={TouchableOpacityOriginal}
        activeOpacity={0.5}
        {...props}
      />
    )
  },
)

export type TouchableOpacity = TouchableOpacityOriginal
