"use client";
import { Settings, UserCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Logout from "../Ui_app/User_components/Logout";

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 100 },
};
function Manuaccont({ closeMenu }: { closeMenu: () => void }) {
  return (
    <>
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={list}
        className="absolute top-12 right-10 rounded bg-background  px-5 py-2 border "
        transition={{ delay: 0.1 }}
      >
        <motion.li
          variants={item}
          className="p-1 flex gap-2 items-center justify-center  cursor-pointer t "
          onClick={closeMenu}
        >
          <UserCircle2 className="w-4  " />
          <Link href={"/Account"} className="text-base font-semibold pb-1">
            account
          </Link>
        </motion.li>

        <motion.li
          variants={item}
          className="p-1 flex gap-2 items-center justify-center   cursor-pointer  t "
          onClick={closeMenu}
        >
          <Settings className="w-4  " />
          <Link href={"/Settings"} className="text-base font-semibold pb-1">
            Settings
          </Link>
        </motion.li>

        <Logout onClick={closeMenu} />
      </motion.ul>
    </>
  );
}

export default Manuaccont;
