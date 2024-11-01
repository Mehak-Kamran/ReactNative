import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { useRouter } from "expo-router";
import { Link } from "expo-router";
import { signin } from "../../lib/appwrite";

const Signin = () => {

  const router = useRouter();

  const [form, setForm] = useState({ email: "", password: "" });
  const [issubmit,setsubmit]=useState(false)
  const submit= async ()=>{ 
    if(form.email===""  || form.password===""){
      Alert.alert("Error","Please enter input in all fields")
    }
    setsubmit(true)
    try{
     await signin(form.email,form.password)
      router.replace("/home")
    }
    catch(error){
      Alert.alert("Error",error.message)
    }finally{
      setsubmit(false)
    }
    
    }

  return (
    <SafeAreaView style={{ backgroundColor: "#161622", height: "100%" }}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View style={{ margin: "20px", width: "100%", height: "100%" }}>
          <Image
            source={images.logo}
            resizeMode="contain"
            style={{ height: "100px", width: "100px" }}
          />
          <Text style={{ fontWeight: "bold", color: "white" }}>Sign In</Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            keyboardType="email-address"
            otherStyles="mt-7"
            placeholder="Enter email"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            placeholder="Enter password"
          />

          <CustomButton
            title="Log In"
            handlePress={submit}
            containerStyles="w-[400px] mt-7"
          />

          <Text
            style={{
              textAlign: "center",
              marginTop: "5px",
              marginRight: "70px",
              color: "white",
            }}
          >
            Don't have an account?{" "}
            <Link href="/signup" style={{ color: "#FF9001", fontWeight: "bold" }}>
              Register Now
            </Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signin;
