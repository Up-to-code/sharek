"use client";
import Image from "next/image";
import Manuaccont from "./Manuaccont";
import { useState } from "react";
import { GetUserData } from "@/auth/Get_user_data";




function Avbtar() {
 let user =  GetUserData()
 console.log(user)
  const [Popup, setPopup] = useState(false);
  const PopupCalick = () => {
    if (Popup) setPopup(false);
    else setPopup(true);
  };

  return (
    <>
      <div className="relative ">
        <div
          className="rounded-full overflow-hidden "
          onClick={() => {
            PopupCalick();
          }}
        >
          <Image
            src={ "https://upcdn.io/kW15bmq/raw/-521134662.png"}
            alt="avtar"
            width={"30"}
            height={"30"}
          />
        </div>
        {/* Manu accont */}
        {Popup ? <Manuaccont /> : ""}
      </div>
    </>
  );
}

export default Avbtar;
