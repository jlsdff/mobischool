import React from "react";
import { ScrollView } from "react-native";
import { Stack } from "expo-router";
import LoadFont from "../components/loadFonts";

export default function Layout() {
    return (
        <LoadFont>
            <Stack />
        </LoadFont>

    )
}