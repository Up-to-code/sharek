import { auth } from "@/app/db/db";
import { onAuthStateChanged } from "firebase/auth";

export const User_Data = () => { 
 const  user = onAuthStateChanged(auth, (user) => {
    if (user) {

      const uid = user.uid;
      const userData = {
        uid,
        email: user.email,
        image: user.photoURL,
        displayName: user.displayName,
      };
      return userData;
      // ...
    } else {
      // User is signed out
      // ...
      return false;
    }
  });
  return user
 }

