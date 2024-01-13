import { useNavigate } from "react-router-dom";
import hero from "/img/heros.webp";
// import Drawere from "./Drawer";
// import { Button } from "@mui/material";
import { Button } from "@/components/ui/button";

function Hero() {
  // navigate to the transfer page
  const navigate = useNavigate();
  const handleTransfer = () => {
    navigate("/transfer");
  };


  
  return (
    <section className="flex flex-col gap-2 md:justify-around justify-center items-center  md:flex-row hero px-3">
      <img
        src={hero}
        alt="hero"
        className="sm:w-1/2 lg:w-1/2 md:w1/2 xl:order-1"
      />
      <div className="flex flex-col gap-2 items-center lx:flex-row md:w-1/3 w-full">
        <h1 className="text-3xl md:text-4xl lg:text-5xl m-0 text-center font-bold my-4">
          مع خدمة <span className="text-green-600 font-bold ">الغول</span> حول
          فظتك بكل سهولة و أمان
        </h1>
        <Button className="min-h-10 px-3 py-4 w-2/3 text-center rounded-md cursor-pointer bg-gradient-to-t from-[#a62ce2] to-[#c045fc] active:scale-95" onClick={handleTransfer}>
          <span className="text-2xl text-white">
            حول فظتك
          </span>
        </Button>
      </div>
    </section>
  );
}
export default Hero;
