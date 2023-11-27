
import Link from "next/link";
import Avbtar from "./ui/avbtar";

function Navbar() {
  return (
    <>
      <header className="flex justify-center items-center border-b-2 h-14 bg-background">
        <div className="container w-full h-full flex justify-between  items-center px-5  ">
          <h1 className="text-2xl  font-bold "><Link href={"/"}>Sharek</Link></h1>
          <nav className="flex gap-5">
            {/* <Link href={"/"}>Home</Link>
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Home</Link> */}
            <Avbtar />
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
