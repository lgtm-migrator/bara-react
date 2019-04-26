import React, { ReactNode } from 'react'
import {
  Text as TextOriginal,
  TextProps as TextPropsOriginal,
} from 'react-native'

import { useBaraContext } from '../../context'
import { BaraBaseComponentProps } from '../../models'

export interface TextProps extends TextPropsOriginal, BaraBaseComponentProps {
  children?: ReactNode
  hasOnPress?: boolean
  hasOnLongPress?: boolean
}

export const Text = React.forwardRef(
  (
    {
      name,
      kind,
      onPress: _onPress,
      onLongPress: _onLongPress,
      hasOnPress,
      hasOnLongPress,
      ...props
    }: TextProps,
    ref: any,
  ) => {
    const context = useBaraContext()
    const onPress: typeof _onPress = event => {
      event.persist()
      context.components.text.onPress({ name, kind, event, ...props })
      if (_onPress) {
        _onPress(event)
      }
    }

    const onLongPress: typeof _onLongPress = event => {
      context.components.text.onLongPress({ name, kind, event, ...props })
      if (_onLongPress) {
        _onLongPress(event)
      }
    }

    const pressableProps: any = {}

    if (hasOnPress) {
      pressableProps.onPress = onPress
    }

    if (hasOnLongPress) {
      pressableProps.onLongPress = onLongPress
    }

    return <TextOriginal {...props} {...pressableProps} ref={ref} />
  },
)

export type Text = TextOriginal
