"use client";
import { motion } from "framer-motion";
import { LogIn } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "@/app/db/db";
const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 100 },
};
interface LogouPrpos {
  onClick: () => void;
}

function Logout({ onClick }: LogouPrpos) {
  const [signOut, loading, error] = useSignOut(auth);
  const LOgOutUserAccount = async () => {
    const success = await signOut();
    if (success) {
      location.href = "/";
    }
  };
  if (loading) {
  }
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger>
          <motion.li
            variants={item}
            className="p-1 flex gap-2 items-center justify-center text-red-500   cursor-pointer  "
          >
            <LogIn className="w-4  " />
            <p className="text-base font-semibold pb-1">account</p>
          </motion.li>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                LOgOutUserAccount();
              }}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default Logout;
