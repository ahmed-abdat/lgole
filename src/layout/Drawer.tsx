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

import {InputForm} from '@/layout/Form'

import { Button } from "@/components/ui/button";

function Drawere() {
  return (
    <Drawer >
      <DrawerTrigger>
        <Button className="w-full text-center relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-[16px] bg-gradient-to-t from-[#8122b0] to-[#dc98fd] active:scale-95">
          <span className="w-full text-2xl h-full flex items-center justify-center  px-10 py-6 bg-[#B931FC] text-[#f1d5fe] rounded-[14px] bg-gradient-to-t from-[#a62ce2] to-[#c045fc]">
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
