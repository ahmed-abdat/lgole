import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SelecteElemnt from "./SelecteElement";

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
      <SelectTrigger className="w-[180px] h-10">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="bankily" >
         <SelecteElemnt src={bankily} alt="بنكيلي" />
        </SelectItem>
        <SelectItem value="masrivy">
          <SelecteElemnt src={masrivy_logo} alt="مصرفي" />
        </SelectItem>
        <SelectItem value="sedad">
            <SelecteElemnt src={sedad_logo} alt="السداد" />
        </SelectItem>
        <SelectItem value="bimbank">
            <SelecteElemnt src={bimbank_logo} alt="بيم بانك" />
        </SelectItem>
        <SelectItem value="barid_cash">
            <SelecteElemnt src={barid_cash} alt="بريد كاش" />
        </SelectItem>

      </SelectContent>
    </Select>
  );
}

export default Selecte;
