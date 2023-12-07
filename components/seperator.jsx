import React from "react";
import { View, Text } from "react-native";

export default function Seperator({ text }) {
    return (
        <View className="flex-row items-center" >
            <View className="flex-1 h-[1px] bg-neutral6" />
            <View>
                <Text className="mx-2 text-center" >{text}</Text>
            </View>
            <View className="flex-1 h-[1px] bg-neutral6" />
        </View>
    )
}