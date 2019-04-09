import React, { Component, ReactNode } from 'react'
import { Text } from 'react-native'

import { BaraProvider } from './lib/context'
import { Touchable } from './lib/exports/Touchable'

const App = () => {
  return (
    <BaraProvider>
      <Touchable name="welcome-button">
        <Text>Welcome!</Text>
      </Touchable>
    </BaraProvider>
  )
}

export default App
