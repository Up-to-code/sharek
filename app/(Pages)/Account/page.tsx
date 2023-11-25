import React from "react";
import MaxWidth from "../../../components/base/MaxWidth";
import Caver_Image_Account from "@/components/Ui_app/Cover_Image_Account";
import UserImage from "@/components/Ui_app/UserImage";
import Usaername from "@/components/Ui_app/Usaername";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import URL_card from "@/components/Ui_app/URL_card";

function Page() {
  return (
    <MaxWidth>
      {/* this is a caver account */}
      <div>
        <Caver_Image_Account />
        <div className="m-auto flex justify-start items-end  flex-row-reverse  relative top-[-50px] right-6">
          <div className="overflow-hidden rounded ">
            <Suspense fallback={<Skeleton className={`w-[100px] h-[100px]`} />}>
              <UserImage width={100} height={100} />
            </Suspense>
          </div>
          <Usaername />
        </div>
      </div>
      {/* this cardd for Linke in website */}
      <div className="flex flex-wrap gap-5">
        <URL_card />
        <URL_card />
        <URL_card />
        <URL_card />
        <URL_card />
        <URL_card />
        <URL_card />
        <URL_card />
        <URL_card />
        <URL_card />
        <URL_card />
        <URL_card />
        <URL_card />
        <URL_card />
        <URL_card />
      </div>
    </MaxWidth>
  );
}

export default Page;
