import React from "react";
import { View, Text, ImageBackground } from "react-native";
import ProfileBar from "../../components/profileTopBar/ProfileBar";

export default function Classes() {
    
  return (
    <ImageBackground
      className="flex-1 bg-center bg-cover pt-8"
      source={require("../../assets/background.png")}
      resizeMode="cover"
    >
      <ProfileBar />
      <Text>Classes Tab</Text>
    </ImageBackground>
  );
}
