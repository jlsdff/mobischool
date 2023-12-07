import React from "react";
import { View, Text } from "react-native"
import { Stack } from "expo-router";

export default function ForgotPassword() {
    return (
        <View className="bg-neutral2 flex-1">
            <Stack.Screen options={{
                title: "Forgot Password",
                headerTitleAlign: "center",
                headerShadowVisible: false,
                headerStyle: {
                    backgroundColor: "#e9ecef"
                }
            }} />
            <Text>Forgot Password</Text>
        </View>

    )
}