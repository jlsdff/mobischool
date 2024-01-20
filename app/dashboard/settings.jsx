import React, { useContext } from "react";
import { View, Text, ImageBackground } from "react-native";
import ProfileBar from "../../components/profileTopBar/ProfileBar";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import AvatarProfile from "../../components/Avatar/AvatarProfile";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { UserContext } from "../../context/userContext";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Spacer from "../../components/spacers/spacer";
import { Link } from "expo-router";

const AccountSettings = [
  {
    title: "Password and Security",
    icon: <MaterialCommunityIcons name="onepassword" size={24} color="black" />,
    path: "/dashboard/passwordAndSecurity",
  },
  {
    title: "Apps and Services",
    icon: <AntDesign name="appstore-o" size={24} color="black" />,
    path: "/dashboard/appsAndServices",
  },
  {
    title: "Privacy",
    icon: <Feather name="lock" size={24} color="black" />,
    path: "/dashboard/privacy",
  },
  {
    title: "Devices",
    icon: <MaterialIcons name="devices" size={24} color="black" />,
    path: "/dashboard/devices",
  },
];

const GeneralSettings = [
  {
    title: "Notifications",
    icon: <Ionicons name="notifications-outline" size={24} color="black" />,
    path: "/dashboard/notificationsSettings",
  },
  {
    title: "Class Settings",
    icon: <MaterialIcons name="settings-overscan" size={24} color="black" />,
    path: "/dashboard/classSettings",
  },
  {
    title: "Help",
    icon: <Feather name="help-circle" size={24} color="black" />,
    path: "/dashboard/help",
  },
  {
    title: "About",
    icon: <Feather name="info" size={24} color="black" />,
    path: "/dashboard/about",
  },
];

export default function Settings() {
  const { user } = useContext(UserContext);

  return (
    <ImageBackground
      className="flex-1 bg-center bg-cover pt-10"
      source={require("../../assets/background.png")}
      resizeMode="cover"
    >
      {/* <View className="flex-row justify-start">
        <View className="flex-1">
          <ProfileBar size={64} />
        </View>
        <View className="pr-4 justify-center items-center">
          <TouchableOpacity activeOpacity={0.5}>
            <AntDesign name="bars" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View> */}
      <View>
        {/* <AvatarProfile size={64} imageUrl={"https://firebasestorage.googleapis.com/v0/b/mobischool-389d8.appspot.com/o/ZdfcCuXd5tcqZ91YDokONyPm5qB2.jpg?alt=media&token=e40cb6e5-8aa4-4606-858a-0c841707adc3"} /> */}
        <View className="flex-row justify-between items-center p-8 bg-neutral-200/50 ">
          <View className="mr-4">
            <AvatarProfile
              size={64}
              imageUrl={
                "https://firebasestorage.googleapis.com/v0/b/mobischool-389d8.appspot.com/o/ZdfcCuXd5tcqZ91YDokONyPm5qB2.jpg?alt=media&token=e40cb6e5-8aa4-4606-858a-0c841707adc3"
              }
            />
          </View>
          <View className="">
            <Text className="text-lg">
              {user.firstname}
              {user.lastname}
            </Text>
            <Text className="text-sm">{user._delegate.email}</Text>
          </View>
          <View className=" justify-center items-end flex-1 ">
            <Link href="/dashboard/profileSettings">
              <MaterialCommunityIcons
                name="circle-edit-outline"
                size={32}
                color="black"
              />
            </Link>
          </View>
        </View>
      </View>
      <View className="p-8">
        <TouchableOpacity activeOpacity={0.5}>
          <View
            className={
              "flex-row p-4 bg-neutral-300/80 rounded-md border border-neutral-400/50"
            }
          >
            <View className="">
              <AntDesign name="user" size={24} color="black" />
            </View>
            <View className="">
              <Text className=" ml-2 font-bold text-neutral-900 text-lg">
                Personal Information
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <Spacer classNames={"my-2"} />
        <Box className={"last:mb-0 first:mt-0"}>
          {AccountSettings.map((item, index) => {
            return (
              <TouchableOpacity
                className="my-2"
                activeOpacity={0.5}
                key={index}
              >
                <View className="flex-row justify-start items-center">
                  <View className="justify-center items-center">
                    {item.icon}
                  </View>
                  <Text className="ml-2 font-bold text-neutral-900 text-lg">
                    {item.title}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </Box>
        <Spacer classNames={"my-2"} />
        <Box className={"last:mb-0 first:mt-0 last:text-red-800"}>
          {GeneralSettings.map((item, index) => {
            return (
              <TouchableOpacity
                className="my-2"
                activeOpacity={0.5}
                key={index}
              >
                <View className="flex-row justify-start items-center">
                  <View className="justify-center items-center">
                    {item.icon}
                  </View>
                  <Text className={`ml-2 font-bold text-neutral-900 text-lg `}>
                    {item.title}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
          <TouchableOpacity className="my-2" activeOpacity={0.5}>
            <View className="flex-row justify-start items-center">
              <View className="justify-center items-center">
                <AntDesign name="logout" size={24} color="red" />
              </View>
              <Text className="ml-2 font-bold text-red-500 text-lg">
                Logout
              </Text>
            </View>
          </TouchableOpacity>
        </Box>
      </View>
    </ImageBackground>
  );
}

function Box({ children, className, ...props }) {
  return (
    <View
      className={`p-4 bg-neutral-300/80 rounded-md border border-neutral-400/50 ${className}`}
    >
      {children}
    </View>
  );
}
