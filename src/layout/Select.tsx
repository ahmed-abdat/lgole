import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Img from "./Img";

import bankily from '/img/bankily.png'
import masrivy_logo from '/img/masrivy_logo.webp'
import sedad_logo from '/img/sedad_logo.png'
import bimbank_logo from '/img/bimbank_logo.webp'
import barid_cash from '/img/barid_cash.jpeg'

function Selecte({ setSelected }: { setSelected: (value: string) => void }) {
  const handleItemClick = (value: string) => {
    setSelected(value);
    console.log(value);
  };

  return (
    <Select onValueChange={handleItemClick} defaultValue="bankily">
      <SelectTrigger className="w-[160px] h-10">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="bankily" >
          <Img src={bankily} alt="bankily" />
        </SelectItem>
        <SelectItem value="masrivy">
          <Img src={masrivy_logo} alt="masrivy_logo" />
        </SelectItem>
        <SelectItem value="sedad">
            <Img src={sedad_logo} alt="sedad_logo" />
        </SelectItem>
        <SelectItem value="bimbank">
            <Img src={bimbank_logo} alt="bimbank_logo" />
        </SelectItem>
        <SelectItem value="barid_cash">
            <Img src={barid_cash} alt="barid_cash" />
        </SelectItem>

      </SelectContent>
    </Select>
  );
}

export default Selecte;
