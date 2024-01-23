import { Alert } from "react-native";
import { auth, firestore } from "./firebase";

export async function SignUp(metadata, email, password) {
  return await auth
    .createUserWithEmailAndPassword(email, password)
    .then(async (userCredentials) => {
      await firestore
        .collection("UserCredentials")
        .doc(userCredentials.user.uid)
        .set(metadata);
      Alert.alert("Success", "Account created successfully");
      return { userCredentials, metadata };
    }
    )
    .catch((error) => {
      console.error(error);
      Alert.alert("Error", error.code);
    });
}
