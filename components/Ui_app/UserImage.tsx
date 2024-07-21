"use client";
import { auth } from "@/app/db/db";
import { useAuthState } from "react-firebase-hooks/auth";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";
import { Suspense, useEffect } from "react";
import { User } from "lucide-react";
import { SetNewUserDoc } from "@/lib/SetNewUserDoc";
import { user_Icone } from "@/public/Images/Images";

interface TypeProps {
  width: number;
  height: number;
}

function UserImage({ width, height }: TypeProps) {
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      SetNewUserDoc({
        Userid: user.uid ? user.uid : "",
        Name: user.displayName ? user.displayName : "Name",
        email: user.email ? user.email : "User email",
        URLimage: user.photoURL ? user.photoURL : "",
      });
    }
  }, [user]);

  if (loading) {
    return <Skeleton className={`w-[${width}px] h-[${height}px]`} />;
  }

  if (error) {
    return (
      <div className="text-zinc-900">
        <User />
      </div>
    );
  }

  if (user) {
    return (
      <Suspense fallback={<Skeleton className={`w-[${width}px] h-[${height}px]`} />}>
        <Image
          src={user?.photoURL ? user.photoURL : user_Icone}
          alt="avatar"
          width={width}
          height={height}
        />
      </Suspense>
    );
  } else {
    return (
      <div className="text-zinc-900 text-3xl">
        <User />
      </div>
    );
  }
}

export default UserImage;

