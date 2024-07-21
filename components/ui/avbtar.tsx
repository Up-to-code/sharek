"use client";

import Manuaccont from "./Manuaccont";
import { useState } from "react";
import UserImage from "../Ui_app/UserImage";
function Avbtar() {
  const [Popup, setPopup] = useState(false);
   const PopupCalick = () => {
    if (Popup) setPopup(false);
    else setPopup(true);
  };

  return (
    <>
      <div className="relative text-zinc-900">
        <div
          className="rounded-full overflow-hidden "
          onClick={() => {
            PopupCalick();
          }}
        >
          <UserImage width={30} height={30} />
        </div>
        {/* Manu accont */}
        {Popup ? <Manuaccont closeMenu={PopupCalick}/> : ""}
      </div>
    </>
  );
}

export default Avbtar;
