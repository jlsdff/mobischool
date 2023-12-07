import React, {useCallback} from "react";
import { View } from "react-native"
import { useFonts } from "expo-font"
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function LoadFont({ children }) {

    const [fontsLoaded, fontError] = useFonts({
        'Montserrat': require('../assets/fonts/Montserrat.ttf'),
        'Roboto-regular': require('../assets/fonts/Roboto-Regular.ttf'),
        'Roboto-medium': require('../assets/fonts/Roboto-Medium.ttf'),
        'Roboto-bold': require('../assets/fonts/Roboto-Bold.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            console.log("fonts are loaded!")
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return <View className="flex-1" onLayout={onLayoutRootView} >{children}</View>
}