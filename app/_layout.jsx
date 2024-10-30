//here you write code of something that you want to display at every screen page 
//like a footer or a nav bar 
import React from 'react'
import { Slot ,Stack,SplashScreen} from 'expo-router'
// // Import your global CSS file
import "../global.css";
//USEFONT HOOK
import { useFonts } from 'expo-font';
import { useEffect } from 'react';


const Rootlayout = () => {
  //usefont hook
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
  
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);
  
  if (!fontsLoaded && !error) {
    return null;
  }


  return( 
  //one way 
//   <Slot />
//second way
//here name is name of route 
<Stack>
    <Stack.Screen name="index" options={{headerShown:false}}/>


</Stack>
  )  
}

export default Rootlayout