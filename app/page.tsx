import Link from "next/link";
import { Suspense } from "react";
export default function Home() {
  return (
    <>
      <Suspense fallback={<p>Loading weather...</p>}>
        <div className="container  flex justify-center items-center h-full min-h-[500px] flex-col  gap-14">
          <h1 className="font-bold text-8xl  max-w-4xl px-10 text-center text-zinc-950">
            Shear data with
            <p className="bg-gradient-to-r from-red-600 via-red-500 to-pink-600 inline-block text-transparent bg-clip-text">
              friends
            </p>
          </h1>
          <div className="flex gap-10  w-72   justify-center items-center font-black">
            <Link
              className=" border-[2px] hover:shadow-none  border-black py-2 px-10 shadow_  bg-gradient-to-r from-red-600 via-red-500 to-pink-600 text-white "
              href={"/Login"}
            >
              Login
            </Link>
            <Link
              href={"/Sign_up"}
              className="flex border-[2px] hover:shadow-none  border-black py-2 px-6 shadow_  bg-zinc-50 text-foreground  hover:bg-secondary font-bold  text-zinc-900"
            >
              Sign up
            </Link>
          </div>
        </div>
      </Suspense>
    </>
  );
}
