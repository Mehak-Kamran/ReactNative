import {Text, View ,ScrollView,Image} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from "../constants";
import {CustomButton} from "../components";
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';



export default function index() {
  return (
    <SafeAreaView style={{backgroundColor:"#161622",height:"100%"}}>
      <ScrollView  contentContainerStyle={
             {height:"100%"}
      }>
        <View style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
               <Image 
               resizeMode="contain"
               source={images.logo}
               style={{
                width: "20%",
                height: "5%",
              }}
              >
              </Image>

              <Image
              source={images.cards}
              resizeMode='contain'
              style={{
                   width:"100%",
                   height:"50%",
                   maxWidth:"80%"
              }}
              >

              </Image>

              <View
              className=''
              style={{display:"flex",justifyContent:"center",alignItems:"center"}}
              >
                <Text className='text-3xl text-white text-center font-bold'>Discover Endless {"\n"}
                  Possibilities with {" "} 
                  <Text className='text-3xl text-secondary-200 text-center font-bold'>Aora </Text>
                  </Text>
                  
                <Text className='text-sm text-slate-400 text-center'>Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora</Text>
              </View>

              <CustomButton
                 title="Continue with Email"
                 handlePress={()=>{ router.push("/signin")}}
                 containerStyles="w-[200px] mt-7 "
              />

             

        </View>

      </ScrollView>
      <StatusBar backgroundColor='#161622' style="light"/>

    </SafeAreaView>
    
  )
}

