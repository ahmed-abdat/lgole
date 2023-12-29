import { useEffect, useState } from "react";
import { ModeToggle } from "../../components/mode-toggle";
import Logo from "/img/logo.png";
import Hero from "/img/hero.png";
import "./home.css";
import { Button } from "@/components/ui/button";
import {DrawerDemo} from '../../layout/DrawerCustom';
function Home() {
  // show the drawer if the screen is mobile and the dialog if it's desktop
  const [showDrawer, setShowDrawer] = useState(false);

  const showDrawerHandler = () => {
    console.log('show drawer');
    
    setShowDrawer(true);
  }
  return (
    <main className="py-2 px-3 md:px-2">
      {/* header */}
      <header className="flex justify-between items-center">
        <img src={Logo} alt="logo" className="w-14" />
        <ModeToggle />
      </header>
      {/* hero */}
      <section className="flex flex-col justify-center items-center  md:flex-row hero">
        <img src={Hero} alt="hero" className="sm:w-full lg:w-1/2 md:w1/2" />
        <div className="flex flex-col lx:flex-row md:w-1/3 w-full">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold my-4">
            مع خدمة <span className="text-green-600 font-bold ">الغول</span> حول
            فظتك بكل سهولة و امان
          </h1>

          {/* <Button className="w-full md:w-auto" onClick={showDrawerHandler}>Get Started</Button> */}
          <DrawerDemo />
       
        </div>
      </section>
    </main>
  );
}

export default Home;
