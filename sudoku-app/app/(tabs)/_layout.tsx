import React from "react";
import { withLayoutContext } from "expo-router";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { HeaderShownContext } from "@react-navigation/elements";

const { Navigator } = createNativeStackNavigator();

const Stack = withLayoutContext(Navigator);

export default function TabLayout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="game" options={{ headerShown: false }} />
        <Stack.Screen name="settings" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaProvider>
  );
}
