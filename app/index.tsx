import {Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function index() {
  return (
    <View className='flex-1 justify-center items-center '>
      <Text className='text-3xl font-pbold'>Hello World</Text>
      <Link href="./home" className='color-blue-600'> go to home </Link>
    </View>
  )
}

