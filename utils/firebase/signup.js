import { auth, firestore } from "./firebase";

export function SignUp({ firstname, lastname, birthdate, email, password }) {
    
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredentials)=> {
            const user = userCredentials.user;
            console.log(user)
            return user;
        }
        )
        .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log({
                code: errorCode,
                message: message
            })
        })
}
