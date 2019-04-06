import React, { Component, ReactNode } from 'react'
import './App.css'
import logo from './logo.svg'

import { Text } from 'react-native'

import { TouchableOpacity } from './lib/components/touchable'
import { BaraProvider } from './lib/context'

const App = () => {
  return (
    <BaraProvider>
      <div className="App">
        <TouchableOpacity>
          <Text>Hello Bara Button</Text>
        </TouchableOpacity>
      </div>
    </BaraProvider>
  )
}

export default App
