import { Input } from "@/components/ui/input";

interface InputTypeProps {
  TypeInput: string;
}
function Inputs_insetinges({ TypeInput }: InputTypeProps) {
  return (
    <div className=" bg-blue-50  px-5 py-10 rounded-md flex flex-col gap-5 ">
      <label htmlFor="User name" className="text-lg font-medium ">
        edit {TypeInput}
      </label>
      <Input type="text" className="max-w-sm " />
    </div>
  );
}

export default Inputs_insetinges;
