import React, { useState } from "react";
import { View, Text, ImageBackground, TextInput, Image, TouchableOpacity, Button } from "react-native";
import { Stack } from "expo-router";
import Seperator from "../components/seperator";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { SignUp } from "../utils/firebase/signup";
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';


export default function SignUpScreen() {

    const [date, setDate] = useState(new Date())

    function onChange(event, selectedDate) {
        const currentDate = selectedDate;
        setDate(currentDate);
    }

    function setBirthdate() {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: 'date',
            is24Hour: true,
        })
    }



    return (
        <View className="flex-1">
            <ImageBackground className="flex-1" source={require("../assets/background.png")} resizeMode="cover" >
                <Stack.Screen options={{ headerShown: false }} />
                <View className="pt-[50px] mx-4">
                    <View className="items-center">
                        <Image className="w-[200px] h-[200px] " source={require("../assets/icon.png")} />
                    </View>
                    <Text className="text-3xl font-bold text-center text-neutral9">Sign up</Text>
                    {/* TODO: Add excerpt here */}
                    <View className="gap-3 mt-3">
                        <TextInput
                            className="px-4 px-2 h-[48px] border border-2 border-neutral7 rounded-xl"
                            placeholder="First Name"
                            inputMode="text"
                            placeholderTextColor={"##6C757D"}
                        />
                        <TextInput
                            className="px-4 px-2 h-[48px] border border-2 border-neutral7 rounded-xl"
                            placeholder="Last Name"
                            inputMode="text"
                            placeholderTextColor={"##6C757D"}
                        />
                        <TouchableOpacity onPress={setBirthdate} >
                            <View className="px-4 px-2 h-[48px] border border-2 border-neutral7 rounded-xl justify-center items-start">
                                <Text className="text-neutral6" >
                                    {
                                        new Date().toLocaleDateString() === date.toLocaleDateString() ?
                                            "Birthdate" :
                                            date.toLocaleDateString()
                                    }
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TextInput
                            className="px-4 px-2 h-[48px] border border-2 border-neutral7 rounded-xl"
                            placeholder="Email"
                            placeholderTextColor={"##6C757D"}
                        />
                        <TextInput
                            className="px-4 px-2 h-[48px] border border-2 border-neutral7 rounded-xl"
                            placeholder="Password"
                            placeholderTextColor={"##6C757D"}
                        />
                        <TextInput
                            className="px-4 px-2 h-[48px] border border-2 border-neutral7 rounded-xl"
                            placeholder="Cofirm Password"
                            placeholderTextColor={"##6C757D"}
                        />
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
        </View>
    )
}