"use client";

import { auth } from "@/app/db/db";
import { useAuthState } from "react-firebase-hooks/auth";
import { Skeleton } from "../ui/skeleton";

function Usaername() {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <Skeleton className="w-[100px] h-[20px] rounded-full " />;
  }
  if (user) {
    return (
      <p className="text-zinc-900 font-bold mx-3 text-2xl pb-2  ">
        {user.displayName}
      </p>
    );
  }
}

export default Usaername;
