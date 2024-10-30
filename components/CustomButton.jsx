import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const CustomButton=({title,handlePress,containerStyles,textStyles})=> {
  return (
    <TouchableOpacity 
    onPress={handlePress}
    className={`bg-secondary-100 rounded-xl min-h-[62px] flex-row justify-center items-center ${containerStyles}`}
    
    
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton;