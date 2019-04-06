import React, { ReactNode, useContext } from 'react'

interface BaraTouchableContext {
  onPress: (name?: string, className?: string) => void
}

interface BaraState {
  touchable: BaraTouchableContext
}

export const BaraProvider = (props: { children: ReactNode }) => {
  const ctx: BaraState = {
    touchable: {
      onPress: (name, className) => {
        alert(`Pressed ${name} ${className}!`)
      },
    },
  }
  return (
    <BaraContext.Provider value={ctx}>{props.children}</BaraContext.Provider>
  )
}

const dummy = (...args: any[]) => undefined

export const BaraContext = React.createContext<BaraState>({
  touchable: { onPress: dummy },
})

export const BaraConsumer = BaraContext.Consumer

export const useBaraContext = (): BaraState => {
  return useContext(BaraContext)
}
