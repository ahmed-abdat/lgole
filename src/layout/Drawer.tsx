import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {InputForm} from '@/layout/Form'

import { Button } from "@/components/ui/button";

function Drawere() {
  return (
    <Drawer >
      <DrawerTrigger className="w-2/3 ">
        <Button className="w-full min-h-10 text-center rounded-md cursor-pointer bg-gradient-to-t from-[#a62ce2] to-[#c045fc] active:scale-95">
          <span className="text-2xl">
            حول فظتك
          </span>
        </Button>
      </DrawerTrigger>
      <DrawerContent >
        <DrawerHeader>
          <DrawerTitle>إختر التطبيق و أدخل رقم الهاتف</DrawerTitle>
        <InputForm />
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}
export default Drawere;
