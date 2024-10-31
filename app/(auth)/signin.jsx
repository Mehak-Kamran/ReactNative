import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import { useState } from "react";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import { Link } from "expo-router";

const Signin = () => {

  
  const [form,setform]=useState({email:"",password:""})
  return (
    <SafeAreaView style={{ backgroundColor: "#161622", height: "100%" }}>
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View style={{ margin: "20px", width: "100%", height: "100%" }}>
          <Image
            source={images.logo}
            resizeMode="contain"
            style={{
              height: "100px",
              width: "100px",
            }}
          />
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
              // fontSize: "20px",
            }}
          >
            Sign In
          </Text>
          
          <FormField 
             title="Email"
             value={form.email}
             handleChangeText={(e)=>{
              setform({...form ,email:e})
             }}
             keyboardType="email-address"
             otherStyles="mt-7"
             placeholder="Enter email"
             
          />
          <FormField 
                      title="Password"
                      value={form.password}
                      handleChangeText={(e)=>{
                        setform({...form ,password:e})
                      }}
                      
                      otherStyles="mt-7"
                      placeholder="Enter password"
                      
                    />

<CustomButton
                 title="Log In"
                 handlePress={()=>{ router.push("/sign")}}
                 containerStyles="w-[400px] mt-7 "
              />

          <Text 
          style={{textAlign:"center",
            marginTop:"5px",marginRight:"70px",
            color:"white"
          }}>Don't have an account? <Link href="/signup" style={{color:"#FF9001",fontWeight:"bold"}}>Register Now</Link></Text>



        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signin;
