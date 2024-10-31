import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { ScreenStack } from 'react-native-screens'

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="signin"  options={{headerShown:false}} />

      
    </Stack>
  )
}

export default AuthLayout