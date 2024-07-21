import { db } from "@/app/db/db";
import { setDoc, doc, getDoc } from "firebase/firestore";

type Props_in_SetNewUserDoc = {
  Userid: string;
  Name: string;
  email: string;
  URLimage: string;
};

export async function SetNewUserDoc({
  Userid,
  email,
  Name,
  URLimage,
}: Props_in_SetNewUserDoc) {
  const docRef = doc(db, "Users", Userid);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    await setDoc(docRef, {
      name: Name,
      email: email,
      URLimage: URLimage,
    }, { merge: true });
  }
}

