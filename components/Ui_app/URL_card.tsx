import { Youtube } from "lucide-react";
import Link from "next/link";

function URL_card() {
  return (
    <Link href={"https://www.youtube.com/channel/UCvW30YHdQ4Znh_fMPZP5H3g"}>
      <div className="min-w-[100px] min-h-[50px] border border-zinc-900 flex justify-evenly items-center py-3 px-7 gap-4 rounded ">
        <Youtube />
        Youtube
      </div>
    </Link>
  );
}

export default URL_card;
/*





<AlertDialog>
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>



*/
