import React, { ReactNode } from 'react'
import {
  Text as TextOriginal,
  TextProps as TextPropsOriginal,
} from 'react-native'

import { useBaraContext } from '../../context'
import { BaraBaseComponentProps } from '../../models'

export interface TextProps extends TextPropsOriginal, BaraBaseComponentProps {
  children?: ReactNode
}

export const Text = React.forwardRef(
  ({ onPress: _onPress, ...props }: TextProps, ref: any) => {
    const context = useBaraContext()
    const onPress: typeof _onPress = e => {
      context.components.text.onPress({ name, ...props })
      if (_onPress) {
        _onPress(e)
      }
    }

    return <TextOriginal {...props} onPress={onPress} ref={ref} />
  },
)

export type Text = TextOriginal
