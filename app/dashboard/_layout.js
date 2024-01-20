import React from "react";
import { View, Text } from "react-native";
import { Tabs, Stack } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function Home() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Tabs
      >
        <Tabs.Screen
          name="home"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  // backgroundColor: focused ? "#000" : "#fff",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AntDesign
                  name="home"
                  size={24}
                  color={focused ? "#219EBC" : "black"}
                />
              </View>
            ),
            tabBarLabel: ({ focused, color }) => (
              <Text
                className="text-xs"
                style={{ color: focused ? "#219EBC" : "black" }}
              >
                Home
              </Text>
            ),
          }}
        />

        <Tabs.Screen
          name="task"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  // backgroundColor: focused ? "#000" : "#fff",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesome5
                  name="tasks"
                  size={24}
                  color={focused ? "#219EBC" : "black"}
                />
              </View>
            ),
            tabBarLabel: ({ focused, color }) => (
              <Text
                className="text-xs"
                style={{ color: focused ? "#219EBC" : "black" }}
              >
                Classes
              </Text>
            ),
          }}
        />
        <Tabs.Screen
          name="classes"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  // backgroundColor: focused ? "#000" : "#fff",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons
                  name="school-outline"
                  size={24}
                  color={focused ? "#219EBC" : "black"}
                />
              </View>
            ),
            tabBarLabel: ({ focused, color }) => (
              <Text
                className="text-xs"
                style={{ color: focused ? "#219EBC" : "black" }}
              >
                Classes
              </Text>
            ),
          }}
        />

        <Tabs.Screen
          name="settings"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  // backgroundColor: focused ? "#000" : "#fff",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Feather
                  name="settings"
                  size={24}
                  color={focused ? "#219EBC" : "black"}
                />
              </View>
            ),
            tabBarLabel: ({ focused, color }) => (
              <Text
                className="text-xs"
                style={{ color: focused ? "#219EBC" : "black" }}
              >
                Classes
              </Text>
            ),
          }}
        />
        <Tabs.Screen
          name="notification"
          options={{
            headerShown: true,
            href: null,
            title: "Notifications",
            headerStyle: {
              backgroundColor: "#fff",
              shadowColor: "transparent",
            },
            headerTintColor: "#000",
          }}
        />
        <Tabs.Screen
          name="profileSettings"
          options={{
            headerShown: true,
            presentation: "modal",
            href: null,
            title: "Edit Profile",
            headerStyle: {
              backgroundColor: "#fff",
              shadowColor: "transparent",
            },
            headerTintColor: "#000",
          }}
        />
      </Tabs>
    </>
  );
}
