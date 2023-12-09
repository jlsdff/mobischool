import React from "react"
import { View, Text } from "react-native"
import { Tabs, Stack } from "expo-router"

export default function Home() {
    return (
        <>
            <Stack.Screen options={{
                headerShown: false
            }} />
            <Tabs>
                <Tabs.Screen name="home" options={{
                    headerShown: false
                }} />
                <Tabs.Screen name="task" options={{
                    headerShown: false
                }} />
                <Tabs.Screen name="classes" options={{
                    headerShown: false
                }} />
                <Tabs.Screen name="settings" options={{
                    headerShown: false
                }} />
            </Tabs>
        </>
    )
}