import { useBarn } from 'bara'
import React, { Component, ReactNode, useState, useEffect } from 'react'

import { StyleSheet } from 'react-native'

import { BaraProvider } from './lib/context'
import { Touchable } from './lib/exports/Touchable'
import { View } from './lib/exports/View'
import { Text } from './lib/exports/Text'
import { TouchableOpacity } from './lib/exports/TouchableOpacity'
import { WelcomeText } from './examples/components/WelcomeText'

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#963899',
  },
  button: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
})

const App = () => {
  const [version, setVersion] = useState('0.0.0')

  useEffect(() => {
    useBarn('version', newVersion => {
      setVersion(newVersion)
    })
  }, [version])

  return (
    <BaraProvider>
      <View name="main-container" style={styles.view}>
        <Text name="version">Version: {version}</Text>
        <View style={styles.button}>
          <Touchable name="welcome-button">
            <Text>Welcome!</Text>
          </Touchable>
        </View>
        <View style={styles.button}>
          <TouchableOpacity name="greet-button">
            <Text>No Greet</Text>
          </TouchableOpacity>
        </View>
        <View>
          <WelcomeText />
        </View>
      </View>
    </BaraProvider>
  )
}

export default App
