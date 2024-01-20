import React, { useEffect, useContext } from "react";
import { View, Text } from "react-native";
import { UserContext } from "../../context/userContext";
import { ImageBackground } from "react-native";
import ProfileBar from "../../components/profileTopBar/ProfileBar";
import { Tabs } from "expo-router";

export default function Home() {
  const { user } = useContext(UserContext);
  console.log(user.photoUrl)
  return (
    <>
    
    <ImageBackground
      className="flex-1 bg-center bg-cover pt-8"
      source={require("../../assets/background.png")}
      resizeMode="cover"
    >
      <ProfileBar photoURL={user.photoUrl} />
      <Text>Home Tab</Text>
    </ImageBackground>
    </>
  );
}
