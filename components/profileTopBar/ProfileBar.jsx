import React, { useContext } from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";
import AvatarProfile from "../Avatar/AvatarProfile";
import { UserContext } from "../../context/userContext";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileBar({ photoSize, photoURL }) {
  const { user } = useContext(UserContext);
  const { firstname, lastname, middlename, school } = user;
  const url = photoURL ? photoURL : null;
  const size = photoSize ? photoSize : 16;

  return (
    <View className="p-4 flex-row justify-between">
      <View className="flex-row justify-start gap-4 ">
        <View className="justify-center items-center">
          <AvatarProfile imageUrl={url} size={size} />
        </View>
        <View className="justify-center ">
          <Text className="text-lg text-neutral-800 font-bold">
            {firstname}
            {lastname}
          </Text>
          <Text className="text-xs text-neutral-700">{school}</Text>
        </View>
      </View>
      <View className="justify-center items-center">
        <Link href="/dashboard/notification">
          <Ionicons name="notifications-outline" size={32} color="black" />
        </Link>
      </View>
    </View>
  );
}
