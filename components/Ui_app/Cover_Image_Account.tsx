import { Image2 } from "@/public/Images/Images";
import Image from "next/image";

function Caver_Image_Account() {
  return (
    <div className="flex justify-center items-center m-auto w-full">
      {/* contanier image  */}
      <div className="w-full h-52 overflow-hidden  flex justify-center items-center mt-14  rounded-md ">
        {/*  image caver */}
        <Image
          src={Image2}
          alt={"this is caver"}
          width={1440}
          height={560}
          className="rounded-lg  overflow-hidden  "
        />
      </div>
    </div>
  );
}

export default Caver_Image_Account;
