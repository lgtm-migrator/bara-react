import React from 'react'
import { Text, Touchable, useBarnState, View } from '../../lib'

export const WelcomeText = () => {
  const [message, setMessage] = useBarnState('welcome', 'Welcome to Bara App!')

  const changeMessage = () => {
    setMessage('New Message')
  }

  return (
    <View name="message-view">
      <Touchable name="change-welcome-message" onPress={changeMessage}>
        <Text>{message}</Text>
      </Touchable>
    </View>
  )
}
