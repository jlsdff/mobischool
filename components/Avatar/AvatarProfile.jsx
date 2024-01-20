import React from "react";
import { View, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function AvatarProfile({ imageUrl, size, ...props }) {
  const defaultSize = size || 32;
  const style = `rounded-full aspect-square`;

  return (
    <>
      {imageUrl ? (
        <View className={`w-[${defaultSize}px] h-[${defaultSize}] `}>
          <Image style={{ width: 64, height: 64 }} className={style} source={{ uri: imageUrl }} />
        </View>
      ) : (
        <View className={`w-[${defaultSize}px] h-[${defaultSize}] `}>
          <FontAwesome name="user-circle-o" size={defaultSize} color="black" />
        </View>
      )}
    </>
  );
}
