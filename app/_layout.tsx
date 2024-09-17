import 'expo-dev-client';
import React, { useEffect } from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as Splash from "expo-splash-screen";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useColorScheme } from "nativewind"
import { StatusBar } from "expo-status-bar";

Splash.preventAutoHideAsync()

export default function RootLayout() {
    const { colorScheme } = useColorScheme()
	const [loaded] = useFonts({
        NunitoLight: require("../assets/fonts/Nunito-Light.ttf"),
        Nunito: require("../assets/fonts/Nunito-Regular.ttf"),
        NunitoSemibold: require("../assets/fonts/Nunito-SemiBold.ttf"),
        NunitoBold: require("../assets/fonts/Nunito-Bold.ttf"),
        NunitoMedium: require("../assets/fonts/Nunito-Medium.ttf"),
    })
    
    useEffect(() => {
        if (loaded) {
            Splash.hideAsync()
        }
        
    }, [loaded])

    if (!loaded) {
        return null
    }

	return (
        <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
            <StatusBar style={colorScheme === "dark" ? "light" : 'dark'} />
            <Stack screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="(drawer)" />
                <Stack.Screen name="profile/[username]" />
                <Stack.Screen name="signin" />
                <Stack.Screen name="signup" />
            </Stack>
        </ThemeProvider>
	);
}
