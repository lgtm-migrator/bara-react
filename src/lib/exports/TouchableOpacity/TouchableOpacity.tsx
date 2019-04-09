import React, { ReactNode } from 'react'
import { TouchableOpacity as TouchableOpacityOriginal } from 'react-native'

import { useBaraContext } from '../../context'
import { Omit } from '../../models'
import { TouchableBase, TouchableBaseProps } from '../Touchable'

export interface TouchableOpacityProps
  extends Omit<TouchableBaseProps, 'TouchableComponent'> {
  TouchableComponent?: TouchableBaseProps['TouchableComponent']
}

export const TouchableOpacity = React.forwardRef(
  (
    {
      TouchableComponent,
      onPress: _onPress,
      name,
      className,
      ...props
    }: TouchableOpacityProps,
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

export type TouchableOpacity = TouchableOpacityOriginal
