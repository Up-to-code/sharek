"use client";
import { auth } from "@/app/db/db";
import { useAuthState } from "react-firebase-hooks/auth";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";
import { Suspense } from "react";
import { User } from "lucide-react";
interface TypeProps {
  width: number;
  height: number;
}

function UserImage({ width, height }: TypeProps) {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <Skeleton className={`w-[${width}px] h-[${height}px]`} />;
  }
  if (error) {
    return (
      <div className="text-zinc-900 ">
        <User />;
      </div>
    );
  }
  if (user) {
    return (
      <Suspense>
        <Image
          src={loading ? "" : user?.photoURL ? user.photoURL : ""}
          alt="avtar"
          width={width}
          height={height}
        />
      </Suspense>
    );
  } else {
    return (
      <div className="text-zinc-900 text-3xl ">
        <User />
      </div>
    );
  }
}

export default UserImage;
