import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container  flex justify-center items-center h-full min-h-[500px] flex-col  gap-14">
      <h1 className="font-bold text-8xl  max-w-4xl px-10 text-center">
        Shear data with
        <p className="bg-gradient-to-r from-red-600 via-red-500 to-pink-600 inline-block text-transparent bg-clip-text">
          friends
        </p>
      </h1>
      <div className="flex gap-10  w-28 justify-center items-center font-black">
        <Button className="  border-[2px] hover:shadow-none  border-black py-4 px-10 shadow_  bg-gradient-to-r from-red-600 via-red-500 to-pink-600 ">
          Button
        </Button>
        <Button className="  border-[2px] hover:shadow-none  border-black py-4 px-10 shadow_  bg-background text-foreground  hover:bg-secondary font-bold       ">
          Button
        </Button>
      </div>
    </div>
  );
}
