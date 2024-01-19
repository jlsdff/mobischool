import React, { useEffect, useContext } from "react"
import {View, Text} from "react-native"
import { UserContext } from "../../context/userContext"


export default function Home(){

    const {user} = useContext(UserContext)
    
    console.log("Home Tab", user)
    
    return (
        <View className="pt-8" >
            <View className="">

            </View>
            <Text>
                Home Tab
            </Text>
        </View>
    )
}