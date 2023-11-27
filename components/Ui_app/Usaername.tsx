"use client";

import { auth } from "@/app/db/db";
import { useAuthState } from "react-firebase-hooks/auth";
import { Skeleton } from "../ui/skeleton";
import { User_DB } from "@/lib/UserDataDB";

function Usaername() {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <Skeleton className="w-[100px] h-[20px] rounded-full " />;
  }
  // const uid = user?.uid;
  // if (uid != undefined) {
  //   User_DB(uid);
  // }

  if (user) {
    return (
      <p className="text-zinc-900 font-bold mx-3 text-2xl pb-2 ">
        {user.displayName === null ? "Name" : user.displayName}
      </p>
    );
  }
}

export default Usaername;
