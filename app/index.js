import React, { useEffect, useState } from "react";
import { View, Text, TextInput, ImageBackground, Image } from "react-native";
import { Stack, Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { TouchableOpacity } from "react-native-gesture-handler";
import Seperator from "../components/seperator";
import { router } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { SignIn } from "../utils/firebase/sigin";
import { auth } from "../utils/firebase/firebase";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function changeInfo(type, value) {
    if (type === "email") {
      setEmail(value);
    } else if (type === "password") {
      setPassword(value);
    }
  }

  useEffect(()=> {
    console.log("Index UseEffect")
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user)
        router.push("/dashboard");
      } else {
        router.push("/");
      }
    });
  }, [])

  async function login() {
    const res = await SignIn(email, password);
  }

  return (
    <View className="flex-1 bg-slate-900 ">
      <StatusBar style="dark" />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <ImageBackground
        className="flex-1"
        source={require("../assets/background.png")}
        resizeMode="cover"
      >
        <Image
          className="h-[200px] w-[200px] mx-auto mt-14"
          source={require("../assets/icon.png")}
        />
        <View className="gap-4 px-4">
          <Text className="text-3xl font-bold text-center text-neutral9">
            Sign in
          </Text>
          <TextInput
            className="h-13 py-2 px-4 border-2 rounded-xl border-neutral7 "
            placeholder="Email"
            onChangeText={(text) => changeInfo("email", text)}
          />
          <TextInput
            className="h-13 py-2 px-4 border-2 rounded-xl border-neutral7 "
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => changeInfo("password", text)}
          />
          <View className="flex-row justify-between items-center">
            <BouncyCheckbox
              onPress={() => {}}
              text="remember me?"
              fillColor="#495057"
              textStyle={{
                textDecorationLine: "none",
              }}
            />
            <Link href="forgot">Forgot Password?</Link>
          </View>
          <View>
            <TouchableOpacity
              className="border border-1 border-slate-900 rounded-xl h-13 py-3 px-5 bg-primary-dark mt-2"
              activeOpacity={0.8}
              onPress={login}
            >
              <Text className="text-center text-xl text-txt-light2">
                Sign in
              </Text>
            </TouchableOpacity>
          </View>

          {/* Seperator */}
          <View>
            <Seperator text={"OR"} />
          </View>

          <TouchableOpacity activeOpacity={0.5}>
            <View className="h-[48px] border border-1 border-neutral7 rounded-xl flex-row justify-center items-center px-4 py-2">
              <View>
                <AntDesign name="google" size={24} color="#343A40" />
              </View>
              <Text className="ml-3 text-base">Continue with Google</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <View className="h-[48px] border border-1 border-neutral7 rounded-xl flex-row justify-center items-center px-4 py-2">
              <View>
                <FontAwesome5 name="facebook" size={24} color="#343A40" />
              </View>
              <Text className="ml-3 text-base">Continue with Facebook</Text>
            </View>
          </TouchableOpacity>

          <Text className="text-center text-base">
            Don't have account?{" "}
            <Link style={{ color: "blue" }} href={"signup"}>
              Sign up
            </Link>
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}
