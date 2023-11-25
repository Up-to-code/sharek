import Card from "@/components/Ui_app/Card";

import MaxWidth from "@/components/base/MaxWidth";
import { Suspense } from "react";

function Page() {
  return (
    <MaxWidth className=" flex flex-col justify-center items-center">
      <section>
        <Suspense fallback={<p>Loading feed...</p>}>
          <Card type="Sign up" />
        </Suspense>
      </section>
    </MaxWidth>
  );
}

export default Page;
