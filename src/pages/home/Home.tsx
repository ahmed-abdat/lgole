import { useEffect, useState } from "react";
import { ModeToggle } from "../../components/mode-toggle";
import Footer from "../Footer";
import CustomeDrawer from "../../layout/Drawer";
import CustomeDialoge from "../../layout/Dialoge";

function Home() {

      // show the drawer if the screen is mobile and the dialog if it's desktop
  const [showDrawer, setShowDrawer] = useState(false);

  useEffect(() => {
    // add the event listener
    window.addEventListener("resize", () => {
      // check if the screen is mobile
      if (window.innerWidth <= 768) {
        setShowDrawer(true);
      } else {
        setShowDrawer(false);
      }
    });

    return () => { 
      // remove the event listener
      window.removeEventListener("resize", () => {});
    }
  }, []);
  return (
    <main className="py-2 px-3">
      {/* header */}
        <header className="flex justify-between items-center p-3">
            { showDrawer ? <CustomeDrawer /> : <CustomeDialoge />}
            <ModeToggle />
        </header>
      {/* footer */}
        <Footer />
    </main>
  );
}

export default Home;
