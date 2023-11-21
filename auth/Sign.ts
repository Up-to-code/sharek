import { auth } from "@/app/db/db";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

export const creatAuth = async (email: string, password: string) => {
  const app = await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      // console.log(user)
      return true;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // console.log(errorMessage)
      return {errorMessage};
      // ..
    });
  return app;
};

export const Login = async (email: string, password: string) => {
 const auth_Login = await  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      return true
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return{ errorMessage }
    });
    return auth_Login
};
