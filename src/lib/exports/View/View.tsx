import React, { ReactNode } from 'react'
import {
  View as ViewOriginal,
  ViewProps as ViewPropsOriginal,
} from 'react-native'

import { useBaraContext } from '../../context'
import { BaraBaseComponentProps } from '../../models'

export interface ViewProps extends ViewPropsOriginal, BaraBaseComponentProps {
  children?: ReactNode
}

export const View = React.forwardRef(
  ({ onLayout: _onLayout, ...props }: ViewProps, ref: any) => {
    const context = useBaraContext()
    const onLayout: typeof _onLayout = e => {
      context.components.view.onLayout({ name, ...props })
      if (_onLayout) {
        _onLayout(e)
      }
    }

    return <ViewOriginal {...props} />
  },
)

export type View = ViewOriginal
