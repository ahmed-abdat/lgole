import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useRef } from "react";
import DropDownMenu from "./DropDownMenu";
// import {ComboboxPopover} from "../layout/CompoBox";
import { Dialog } from "@mui/material";
import { DrawerDemo } from "./DrawerCustom";

export default function CustomeDrawer() {
    
    const closeDraweRef = useRef<HTMLButtonElement>(null);

//   close drawer
const closeDrawer = () => {
    if (closeDraweRef.current) {
        closeDraweRef.current?.click();
    }
}

  return (
    <div>
      <Drawer>
        <DrawerTrigger>
          <Button variant="secondary">show the drawer</Button>
           </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Drawer Title</DrawerTitle>
            <DrawerDescription>Drawer Description</DrawerDescription>
          </DrawerHeader>
        <DrawerFooter>
      <Button onClick={closeDrawer}>Submit</Button>
      <DrawerClose>
        <Button variant="outline" ref={closeDraweRef}>Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
