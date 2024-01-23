import React, { useReducer } from "react";
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  Image,
  TouchableOpacity,
  Button,
  ScrollView,
  Alert,
} from "react-native";
import { Stack } from "expo-router";
import Seperator from "../components/seperator";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { SignUp } from "../utils/firebase/signup";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { router } from "expo-router";

function reducer(state, action) {
  const { type, value } = action;

  switch (type) {
    case "firstname":
      return { ...state, firstname: value };
    case "lastname":
      return { ...state, lastname: value };
    case "birthdate":
      return { ...state, birthdate: value };
    case "email":
      return { ...state, email: value };
    case "password":
      return { ...state, password: value };
    case "confirmPassword":
      return { ...state, confirmPassword: value };
    case "school":
      return { ...state, school: value };
    default:
      return state;
  }
}

export default function SignUpScreen() {
  const [credentials, credentialsDispatch] = useReducer(reducer, {
    firstname: "",
    lastname: "",
    birthdate: new Date(),
    email: "",
    school: "",
    password: "",
    confirmPassword: "",
  });

  async function onSignUp() {
    const metadata = {
      firstname: credentials.firstname,
      lastname: credentials.lastname,
      birthdate: credentials.birthdate.valueOf(),
      school: credentials.school,
    };
    const email = credentials.email;
    const password = credentials.password;
    const confirmPassword = credentials.confirmPassword;

    if (password !== confirmPassword) {
      return alert("Passwords do not match");
    }

    await SignUp(metadata, email, password)
      .then(() => {
        router.push("/");
      })
  }

  function onChange(event, selectedDate) {
    const birthdate = selectedDate;
    credentialsDispatch({ type: "birthdate", value: birthdate });
  }

  function setBirthdate() {
    DateTimePickerAndroid.open({
      value: credentials.birthdate,
      onChange,
      mode: "date",
      is24Hour: true,
    });
  }

  return (
    <ScrollView className="flex-1 ">
      <ImageBackground
        className="flex-1 pb-4"
        source={require("../assets/background.png")}
        resizeMode="cover"
      >
        <Stack.Screen options={{ headerShown: false }} />
        <View className="pt-[50px] mx-4">
          <View className="items-center">
            <Image
              className="w-[200px] h-[200px] "
              source={require("../assets/icon.png")}
            />
          </View>
          <Text className="text-3xl font-bold text-center text-neutral9">
            Sign up
          </Text>
          {/* TODO: Add excerpt here */}
          <Text className="text-center text-lg text-neutral8">
            Create a new account
          </Text>
          <View className="gap-3 mt-3">
            <TextInput
              className="px-4 px-2 h-[48px] border border-2 border-neutral7 rounded-xl"
              placeholder="First Name"
              inputMode="text"
              placeholderTextColor={"#6C757D"}
              onChangeText={(text) =>
                credentialsDispatch({ type: "firstname", value: text })
              }
            />
            <TextInput
              className="px-4 px-2 h-[48px] border border-2 border-neutral7 rounded-xl"
              placeholder="Last Name"
              inputMode="text"
              placeholderTextColor={"#6C757D"}
              onChangeText={(text) =>
                credentialsDispatch({ type: "lastname", value: text })
              }
            />
            <TouchableOpacity onPress={setBirthdate}>
              <View className="px-4 px-2 h-[48px] border border-2 border-neutral7 rounded-xl justify-center items-start">
                <Text className="text-neutral6">
                  {new Date().toLocaleDateString() ===
                  credentials.birthdate.toLocaleDateString()
                    ? "Birthdate"
                    : credentials.birthdate.toLocaleDateString()}
                </Text>
              </View>
            </TouchableOpacity>
            <TextInput
              className="px-4 px-2 h-[48px] border border-2 border-neutral7 rounded-xl"
              placeholder="Email"
              placeholderTextColor={"#6C757D"}
              onChangeText={(text) =>
                credentialsDispatch({ type: "email", value: text })
              }
            />
            <TextInput
              className="px-4 px-2 h-[48px] border border-2 border-neutral7 rounded-xl"
              placeholder="School"
              placeholderTextColor={"#6C757D"}
              onChangeText={(text) =>
                credentialsDispatch({ type: "school", value: text })
              }
            />
            <TextInput
              className="px-4 px-2 h-[48px] border border-2 border-neutral7 rounded-xl"
              placeholder="Password"
              placeholderTextColor={"#6C757D"}
              onChangeText={(text) =>
                credentialsDispatch({ type: "password", value: text })
              }
              secureTextEntry={true}
            />
            <TextInput
              className="px-4 px-2 h-[48px] border border-2 border-neutral7 rounded-xl"
              placeholder="Cofirm Password"
              placeholderTextColor={"#6C757D"}
              onChangeText={(text) =>
                credentialsDispatch({ type: "confirmPassword", value: text })
              }
              secureTextEntry={true}
            />
            <View>
              <TouchableOpacity
                className="border border-1 border-slate-900 rounded-xl h-13 py-3 px-5 bg-primary-dark mt-2"
                activeOpacity={0.8}
                onPress={onSignUp}
              >
                <Text className="text-center text-xl text-txt-light2">
                  Sign in
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <Seperator text="OR" />
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
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
