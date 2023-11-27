import { ReactNode } from "react";
import Link from "next/link";
type Props = {
  Title: string;
  cont: string;
  children: ReactNode;
  Linke_path: string;
};
function Card_for_add_item({ Title, cont, children, Linke_path }: Props) {
  return (
    <Link href={Linke_path}>
      <div className=" max-w-xs bg-zinc-50 border border-zinc-950 rounded max-h-52 h-52 bg-gradient-to-r from-red-400  to-orange-400 flex items-end flex-col w-44">
        <div className="flex justify-center items-center w-full h-[75%] text-white text-5xl ">
          {children}
        </div>
        <div className="bg-zinc-50 h-1/3 w-full border-t border-zinc-900 px-4 ">
          <p className="font-semibold text-lg">{Title}</p>
          <p>{cont}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card_for_add_item;
