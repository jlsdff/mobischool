import React from "react";
import { ScrollView } from "react-native";
import { Stack } from "expo-router";
// import LoadFont from "../components/loadFonts";
import UserProvider from "../providers/userProvider";

export default function Layout() {
  return (
    <UserProvider>
      <Stack />
    </UserProvider>
  );
}
