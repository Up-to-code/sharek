"use client";
import {auth, db } from "@/app/db/db";
import MaxWidth from "@/components/base/MaxWidth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { Suspense, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const AddNweItem = async (uid: string, Name: string, Link: string) => {
  const docRef = doc(db, "Users", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data().Links);
    const Data = docSnap.data().Links;
    if (Data) {
      console.log(Data);
      const UserRef = doc(db, "Users", uid);
      const send = await setDoc(
        UserRef,
        {
          Links: [
            {
              name: Name,
              Link: Link,
            },
            ...Data,
          ],
        },
        { merge: true }
      );
    }
  } else {
  }
};
function Page() {
  const [Name_Input, setName_Input] = useState("");
  const [Link_Input, setLink_Input] = useState("");
  const Hadel = async (valu: string, type: string) => {
    const [user, laoding, error] = useAuthState(auth);
    if (type == "Name") {
      setName_Input(valu);
    }
    if (type == "Link") {
      setLink_Input(valu);
    }
    if (type == "Send") {
      console.log(Name_Input);
      console.log(Link_Input);
      if (user?.displayName) {
        await AddNweItem(user?.uid, Name_Input, Link_Input);
      } else {
        alert("you cant add ");
      }
    }
  };

  return (
    <div className="mt-11 ">
      <MaxWidth>
        <h1 className="text-3xl  font-bold my-5  ">Add Link</h1>
        <Suspense fallback={<Skeleton className={`w-[100%] h-[300px]`} />}>
        <div className="w-full mx-8 shadow-md  rounded min-h-[300px] flex flex-col  gap-3 px-10 justify-center">
          <div className="flex flex-col  gap-3">
            <label className="text-lg ">Link Name</label>
            <Input
              placeholder="Name"
              onChange={(e) => {
                Hadel(e.target.value, "Name");
              }}
            ></Input>
          </div>

          <div className="flex flex-col  gap-3">
            <label className="text-lg ">Link</label>
            <Input
              placeholder="Link"
              onChange={(e) => {
                Hadel(e.target.value, "Link");
              }}
            ></Input>
          </div>
          <Button
            className="mt-5"
            onClick={() => {
              Hadel("", "Send");
            }}
          >
            Send
          </Button>
        </div>
        </Suspense>
      </MaxWidth>
    </div>
  );
}

export default Page;
