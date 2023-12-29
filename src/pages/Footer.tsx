import { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import {
  GearIcon,
  HomeIcon,
  QuestionMarkCircledIcon,
} from "@radix-ui/react-icons";
import { Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LabelBottomNavigation() {
  const [value, setValue] = useState("/");

  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    // console.log("clickded", event.currentTarget, newValue);
    
    setValue(newValue);
    setTimeout(() => {
      Navigation(newValue);
    } , 1000);

  };

  const Navigation = (path : String) => {
    console.log("path", path);
    
    if (path == "/") {
      navigate('/');
    } else if (path == "settings") {
      navigate('/settings');
    } else if (path == "Info") {
      navigate('/Info');
    } else if (path == "bell") {
      navigate('/bell');
    }
  }


  const stylesBtn = {
    width: 20,
    height: 20,
  };

  return (
    <section className="fixed bottom-0 left-0 w-screen bg-slate-50">
      <BottomNavigation
        sx={{ width: "100%", minHeight: "9dvh", background: "inherit" }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="Settings"
          value="settings"
          icon={<GearIcon style={stylesBtn} />}
        />
        <BottomNavigationAction
          label="Info"
          value="Info"
          icon={<QuestionMarkCircledIcon style={stylesBtn} />}
        />
        <BottomNavigationAction
          label="Bell"
          value="bell"
          icon={<Bell style={stylesBtn} />}
        />
        <BottomNavigationAction
          label="Home"
          value="/"
          icon={<HomeIcon style={stylesBtn} />}
        />
      </BottomNavigation>
    </section>
  );
}
