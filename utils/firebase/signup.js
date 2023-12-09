import { auth } from "./firebase";

export function SignUp({ firstname, lastname, birthdate, email, password }) {
    auth.createUserWithEmailAndPassword(email, password)
        .then(

    )
        .catch(error => {

        })
}
