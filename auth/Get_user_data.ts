import { auth } from "@/app/db/db";
import { onAuthStateChanged } from "firebase/auth";
import { json } from "stream/consumers";
interface TypesUserData {
  uid: string | undefined;
  email: string | undefined | null;
  image: string | null | undefined;
  displayName: string | null | undefined;
}


export const GetUserData = () => {
  let user = onAuthStateChanged(auth, async (user) => {
    const userdata = await user;
  
   

})
return user
};
