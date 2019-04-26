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
      <Text name="pressable-text" hasOnPress>
        Press me! I'm a special Text
      </Text>
      <Text name="not-pressable-text">
        Do not Press me! I'm a Text without any special
      </Text>
    </View>
  )
}
