import Footer from "../Footer";
import CustomeDrawer from "@/layout/Drawer";
import DropDownMenu from "@/layout/DropDownMenu";
// import { ComboboxPopover } from "../../layout/CompoBox";
import {DrawerDemo} from '../../layout/DrawerCustom';

function NoteFound() {
  return (
    <div className="flex items-center justify-center p-4 flex-col text-center mt-5 h-dvh gap-8">
      <CustomeDrawer />
      <DropDownMenu />
      <Footer />
        <DrawerDemo />
      {/* <ComboboxPopover /> */}
    </div>
  );
}

export default NoteFound;
