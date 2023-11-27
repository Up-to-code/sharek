import { db } from "@/app/db/db";
import { doc, getDoc } from "firebase/firestore";

export async function User_DB( Userid:string) {
  console.log(Userid);  
    // console.log("2");
    const docRef = doc(db, "Users", Userid);
    const docSnap = await getDoc(docRef);
    // console.log(docSnap.data()?.name );
    let name_user = docSnap.data()?.name
   return name_user
}
