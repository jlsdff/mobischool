import React from "react";
import { View, Text, TextInput, ImageBackground, Image } from "react-native"
import { Stack, Link } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { TouchableOpacity } from "react-native-gesture-handler";
import Seperator from "../components/seperator";
import { useRouter } from "expo-router";

const background = { uri: "../assets/background.png" }

export default function Index() {

    const router = useRouter();

    // 
    function login(){
        router.push("/dashboard/")
    }
    
    return (
        <View className="flex-1 bg-slate-900 ">
            <StatusBar style="dark" />
            <Stack.Screen options={{
                headerShown: false
            }} />
            <ImageBackground className="flex-1" source={require("../assets/background.png")} resizeMode="cover" >
                < Image className="h-[200px] w-[200px] mx-auto mt-14" source={require("../assets/icon.png")} />
                <View className="gap-4 px-4">
                    <Text className="text-slate-950 text-3xl text-center text-black font-sans" >Sign in</Text>
                    <TextInput
                        className="h-13 py-2 px-4 border-2 rounded-xl border-neutral7 "
                        placeholder="Email"
                    />
                    <TextInput
                        className="h-13 py-2 px-4 border-2 rounded-xl border-neutral7 "
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                    <View className="flex-row justify-between items-center">
                        <BouncyCheckbox
                            onPress={() => { }}
                            text="remember me?"
                            fillColor="#495057"
                            textStyle={{
                                textDecorationLine: "none",
                            }}
                        />
                        <Link href="forgot"  >Forgot Password?</Link>
                    </View>
                    <View >
                        <TouchableOpacity 
                            className="border border-1 border-slate-900 rounded-xl h-13 py-3 px-5 bg-primary-dark mt-2" 
                            activeOpacity={0.8}
                            onPress={login}
                             >
                            <Text className="text-center text-xl text-txt-light2">Sign in</Text>
                        </TouchableOpacity>
                    </View>


                    {/* Seperator */}
                    <View>
                        <Seperator text={"OR"} />
                    </View>



                </View>
            </ImageBackground>
        </View>
    )
}

