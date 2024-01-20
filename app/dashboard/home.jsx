import React, { useEffect, useContext } from "react";
import { View, Text } from "react-native";
import { UserContext } from "../../context/userContext";
import { ImageBackground } from "react-native";
import ProfileBar from "../../components/profileTopBar/ProfileBar";

export default function Home() {
  const { user } = useContext(UserContext);
  return (
    <ImageBackground
      className="flex-1 bg-center bg-cover pt-8"
      source={require("../../assets/background.png")}
      resizeMode="cover"
    >
      <ProfileBar />
      <Text>Home Tab</Text>
    </ImageBackground>
  );
}
