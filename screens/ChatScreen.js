import { View, Text } from 'react-native'
import React from 'react'

const ChatScreen = ({ navigation, route }) => {
  return (
    <View>
      <Text>{route.params.idSesion}</Text>
    </View>
  )
}

export default ChatScreen