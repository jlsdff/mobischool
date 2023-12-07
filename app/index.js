import React from "react";
import { View, Text } from "react-native"
import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { styled } from "nativewind";

export default function Index() {
    return (
        <View className="flex-1 bg-slate-100">
            <StatusBar style="dark" />
            <Stack.Screen options={{
                // headerShown: false
                // headerTransparent: true
            }} /> 
            <Text className="text-orange-950 text-3xl" >Hello World!</Text>
        </View>
    )
}

