import { auth } from "./firebase"

export function SignIn(email, password) {
    auth
        .then((userCredential) => {
            console.log(userCredential)
            const user = userCredential.user;
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
                Alert.alert("Error", "Something went wrong")
            }
            return error;
        })
}