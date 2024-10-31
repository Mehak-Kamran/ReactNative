import { View, Text,TextInput,Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { icons } from "../constants";




const FormField =
 ({title,value,handleChangeText,otherStyles,placeholder,...props}) => {
    const [showpassword,setshowpassword]=useState(false)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text style={{fontWeight: "bold",
              color: "white",
              fontSize: "14px",marginBottom:"3px",marginLeft:"1.5px"}} >{title}</Text>
      <View 
      style={{
        width:"70%",backgroundColor:"#1e1e2d",borderRadius:"5px",padding:"5px",
        display:"flex" , flexDirection:"row"}}>
        <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={handleChangeText}
        className="flex-1 text-slate-400 font-thin text-base"
        secureTextEntry={title==="Password" && !showpassword}
        {...props}
        />
{title==="Password" &&(
            <TouchableOpacity onPress={()=>{setshowpassword(!showpassword)}}>
                <Image

                source={!showpassword ? icons.eye:icons.eyeHide}
                style={{ width: 24, height: 24 }}
            resizeMode="contain"
                
                
                />
            </TouchableOpacity>
         ) }   
         
        
      </View>
    </View>
  )
}

export default FormField