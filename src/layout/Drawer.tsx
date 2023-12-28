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
        <DrawerTrigger>chose your bank</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you sure absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button
              onClick={closeDrawer}
            >
              Submit
            </Button>
            <DrawerClose ref={closeDraweRef}>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
