import React from 'react'
import { useBarnState, Text, Touchable, View } from '../../lib'

export const WelcomeText = () => {
  const [message, setMessage] = useBarnState('welcome', 'Welcome to Bara App!')

  const changeMessage = () => {
    setMessage('New Message')
  }

  return (
    <View>
      <Touchable name="change-welcome-message" onPress={changeMessage}>
        <Text>{message}</Text>
      </Touchable>
    </View>
  )
}
