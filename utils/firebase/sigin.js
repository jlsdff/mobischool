import { useContext } from "react";
import { auth } from "./firebase"
import { Alert } from "react-native";
import { router } from "expo-router";
import { UserContext } from "../../context/userContext";

export async function SignIn(email, password) {

    const ctx = useContext(UserContext);

    await auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            ctx.setUser(user);
            router.push("/dashboard");
            return user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            if (errorCode === "auth/email-already-in-use") {
                Alert.alert("Error", "Email already in use");
            } else if (errorCode === "auth/invalid-email") {
                Alert.alert("Error", "Invalid email");
            } else {
                Alert.alert("Invalid Credentials", "Wrong email or password")
            }
            return error;
        })
}