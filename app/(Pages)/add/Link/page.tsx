"use client";
import { auth, db } from "@/app/db/db";
import MaxWidth from "@/components/base/MaxWidth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { Suspense, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const AddNewItem = async (uid: string, Name: string, Link: string) => {
  const docRef = doc(db, "Users", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const data = docSnap.data()?.Links || [];
    const updatedData = [
      ...data,
      { name: Name, Link: Link },
    ];
    await setDoc(docRef, { Links: updatedData }, { merge: true });
  }
};

function Page() {
  const [nameInput, setNameInput] = useState("");
  const [linkInput, setLinkInput] = useState("");

  const handleInputChange = (value: string, type: string) => {
    if (type === "Name") {
      setNameInput(value);
    } else if (type === "Link") {
      setLinkInput(value);
    }
  };

  const handleSendClick = async () => {
    const [user] = useAuthState(auth);
    if (user?.displayName) {
      await AddNewItem(user.uid, nameInput, linkInput);
    } else {
      alert("You can't add a link.");
    }
  };

  return (
    <div className="mt-11 ">
      <MaxWidth>
        <h1 className="text-3xl font-bold my-5 ">Add Link</h1>
        <Suspense fallback={<Skeleton className="w-full h-[300px]" />}>
          <div className="w-full mx-8 shadow-md rounded min-h-[300px] flex flex-col gap-3 px-10 justify-center">
            <div className="flex flex-col gap-3">
              <label className="text-lg">Link Name</label>
              <Input
                placeholder="Name"
                onChange={(e) => handleInputChange(e.target.value, "Name")}
              ></Input>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-lg">Link</label>
              <Input
                placeholder="Link"
                onChange={(e) => handleInputChange(e.target.value, "Link")}
              ></Input>
            </div>
            <Button
              className="mt-5"
              onClick={handleSendClick}
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

