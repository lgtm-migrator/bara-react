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
    
    const onPress: typeof _onPress = event => {
      event.persist()
      context.components.touchableOpacity.onPress({
        name,
        kind,
        event,
        ...props,
      })
      if (_onPress) {
        _onPress(event)
      }
    }

    const onPressIn: typeof _onPressIn = event => {
      event.persist()
      context.components.touchableOpacity.onPressIn({
        name,
        kind,
        event,
        ...props,
      })
      if (_onPressIn) {
        _onPressIn(event)
      }
    }

    const onPressOut: typeof _onPressOut = event => {
      event.persist()
      context.components.touchableOpacity.onPressOut({
        name,
        kind,
        event,
        ...props,
      })
      if (_onPressOut) {
        _onPressOut(event)
      }
    }

    const onLongPress: typeof _onLongPress = event => {
      event.persist()
      context.components.touchableOpacity.onLongPress({
        name,
        kind,
        event,
        ...props,
      })
      if (_onLongPress) {
        _onLongPress(event)
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
