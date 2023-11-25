import Link from "next/link";

function Slider() {
  return (
    <div className="w-1/4 bg-zinc-100  min-h-max flex flex-col text-xl font-semibold   ">
      <Link
        href={"/Settings"}
        className="text-white w-full h-10 bg-blue-500 py-2 px-10 "
      >
        Settings
      </Link>
    </div>
  );
}

export default Slider;
