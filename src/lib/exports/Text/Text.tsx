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
  ({ onLayout: _onLayout, ...props }: TextProps, ref: any) => {
    const context = useBaraContext()
    const onLayout: typeof _onLayout = e => {
      context.components.text.onLayout({ name, ...props })
      if (_onLayout) {
        _onLayout(e)
      }
    }

    return <TextOriginal {...props} onLayout={onLayout} ref={ref} />
  },
)

export type Text = TextOriginal
