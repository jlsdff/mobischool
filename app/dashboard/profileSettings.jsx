import React, { useReducer } from "react";
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { router } from "expo-router";

function reducer(state, action) {
  const { type, value } = action;

  switch (type) {
    case "firstname":
      return { ...state, firstname: value };
    case "lastname":
      return { ...state, lastname: value };
    case "middlename":
      return { ...state, middlename: value };
    case "birthdate":
      return { ...state, birthdate: value };
    case "email":
      return { ...state, email: value };
    case "school":
      return { ...state, school: value };
    default:
      return state;
  }
}

export default function profileSettings() {
  const [profile, setProfile] = useReducer(reducer, {
    firstname: "",
    lastname: "",
    middlename: "",
    birthdate: new Date(),
    email: "",
    school: "",
  });

  function onChange(event, selectedDate) {
    const birthdate = selectedDate;
    setProfile({ type: "birthdate", value: birthdate });
  }

  function setBirthdate() {
    DateTimePickerAndroid.open({
      value: profile.birthdate,
      onChange,
      mode: "date",
      is24Hour: true,
    });
  }

  return (
    <ImageBackground
      className="flex-1 pb-4 pt-10 px-4"
      source={require("../../assets/background.png")}
      resizeMode="cover"
    >
      <View className="flex-row justify-start items-center mb-4">
        <TouchableOpacity activeOpacity={0.5} className="mr-2" onPress={()=>{router.back()}} >
          <Ionicons name="chevron-back" size={32} color="black" />
        </TouchableOpacity>
        <Text className="text-xl font-bold">Edit Profile</Text>
      </View>

      <View>

      </View>
      
      <View className="gap-2">
        <TextInput
          className="px-2 h-[48px] border-2 border-neutral7 rounded-xl"
          placeholder="First Name"
          inputMode="text"
          placeholderTextColor={"#6C757D"}
          onChangeText={(text) =>
            setProfile({ type: "firstname", value: text })
          }
        />
        <TextInput
          className="px-2 h-[48px] border-2 border-neutral7 rounded-xl"
          placeholder="Last Name"
          inputMode="text"
          placeholderTextColor={"#6C757D"}
          onChangeText={(text) => setProfile({ type: "lastname", value: text })}
        />
        <TextInput
          className="px-2 h-[48px] border-2 border-neutral7 rounded-xl"
          placeholder="Middle Name"
          inputMode="text"
          placeholderTextColor={"#6C757D"}
          onChangeText={(text) =>
            setProfile({ type: "middlename", value: text })
          }
        />
        <TouchableOpacity onPress={setBirthdate}>
          <View className="px-2 h-[48px] border-2 border-neutral7 rounded-xl justify-center items-start">
            <Text className="text-neutral-500">
              {new Date().toLocaleDateString() ===
              profile.birthdate.toLocaleDateString()
                ? "Birthdate"
                : profile.birthdate.toLocaleDateString()}
            </Text>
          </View>
        </TouchableOpacity>
        <TextInput
          className="px-2 h-[48px] border-2 border-neutral7 rounded-xl"
          placeholder="School/Workplace"
          inputMode="text"
          placeholderTextColor={"#6C757D"}
          onChangeText={(text) =>
            setProfile({ type: "school", value: text })
          }
        />
      </View>
    </ImageBackground>
  );
}
