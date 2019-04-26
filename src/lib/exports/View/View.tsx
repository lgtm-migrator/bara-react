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
  ({ onLayout: _onLayout, name, kind, ...props }: ViewProps, ref: any) => {
    const context = useBaraContext()
    const onLayout: typeof _onLayout = event => {
      context.components.view.onLayout({ name, kind, event, ...props })
      if (_onLayout) {
        _onLayout(event)
      }
    }

    return <ViewOriginal {...props} onLayout={onLayout} ref={ref} />
  },
)

export type View = ViewOriginal
