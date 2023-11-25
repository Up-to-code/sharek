import Inputs_insetinges from "@/components/Ui_app/Inputs_insetinges";
import Slider from "@/components/Ui_app/Slider";
import MaxWidth from "@/components/base/MaxWidth";

function page() {
  return (
    <div className="flex">
      <Slider />
      <MaxWidth className=" w-full ">
        <div className="w-full bg-white  min-h-screen shadow my-10 flex flex-col gap-4  ">
          <label htmlFor="edit user" className="text-xl font-bold ">
            Edit User
          </label>
          <Inputs_insetinges TypeInput="name" />
        </div>
      </MaxWidth>
    </div>
  );
}

export default page;
