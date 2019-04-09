import React, { ReactNode, useContext } from 'react'
import {
  BaraTouchableContext,
  context as touchableContextState,
} from './exports/Touchable'

interface BaraComponentsState {
  touchable: BaraTouchableContext
}

interface BaraState {
  components: BaraComponentsState
}

const baraState: BaraState = {
  components: {
    touchable: touchableContextState,
  },
}

export const BaraProvider = (props: { children: ReactNode }) => {
  return (
    <BaraContext.Provider value={baraState}>
      {props.children}
    </BaraContext.Provider>
  )
}

const dummy = (...args: any[]) => undefined

export const BaraContext = React.createContext<BaraState>(baraState)

export const BaraConsumer = BaraContext.Consumer

export const useBaraContext = (): BaraState => {
  return useContext(BaraContext)
}
