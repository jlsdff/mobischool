import { firestore } from "./firebase";

export async function getUserCredentials(uid) {
  const userCredentials = await firestore
    .collection("UserCredentials")
    .doc(uid)
    .get()
    .then((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
      };
    })
    .catch((error) => {
      console.error(error);
    });
  return userCredentials;
}
