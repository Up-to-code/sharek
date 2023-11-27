import { Barcode, Link } from "lucide-react";
import Card_for_add_item from "@/components/Ui_app/Card_for_add_item";
import MaxWidth from "@/components/base/MaxWidth";
const Card_data = {
  title: "add link",
  cont: "You can add a title ",
  Link_Path: "/add/Link",
};

function page() {
  return (
    <MaxWidth>
      {/* 
     this  a card  for selct any  card 
    */}
      <div className="flex flex-wrap gap-7 mt-10">
        <Card_for_add_item
          Title={Card_data.title}
          cont={Card_data.cont}
          Linke_path={Card_data.Link_Path}
        >
          <Link className="w-16 h-10 " />
        </Card_for_add_item>

        <Card_for_add_item
          Title={Card_data.title}
          cont={Card_data.cont}
          Linke_path={Card_data.Link_Path}
        >
          <Barcode className="w-16 h-10 " />
        </Card_for_add_item>

        <Card_for_add_item
          Title={Card_data.title}
          cont={Card_data.cont}
          Linke_path={Card_data.Link_Path}
        >
          <Link className="w-16 h-10 " />
        </Card_for_add_item>
      </div>
    </MaxWidth>
  );
}

export default page;
