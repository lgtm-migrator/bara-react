import React, { Component, ReactNode } from 'react'

import { StyleSheet } from 'react-native'

import { BaraProvider } from './lib/context'
import { Touchable } from './lib/exports/Touchable'
import { View } from './lib/exports/View'
import { Text } from './lib/exports/Text'

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
})

const App = () => {
  return (
    <BaraProvider>
      <View style={styles.view}>
        <View style={styles.button}>
          <Touchable name="welcome-button">
            <Text>Welcome!</Text>
          </Touchable>
        </View>
        <View style={styles.button}>
          <Touchable name="greet-button">
            <Text>No Greet</Text>
          </Touchable>
        </View>
      </View>
    </BaraProvider>
  )
}

export default App
