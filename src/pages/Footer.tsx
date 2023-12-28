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
    console.log("clickded", event.currentTarget, newValue);
    
    setValue(newValue);
    Navigation(newValue);

  };

  const Navigation = (path : String) => {
    if (path == "/") {
      navigate('/');
    } else if (path == "settings") {
      navigate('/${path}');
    } else if (path == "Info") {
      navigate('/${path}');
    } else if (path == "bell") {
      navigate('/${path}');
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
          value={value}
          icon={<GearIcon style={stylesBtn} />}
        />
        <BottomNavigationAction
          label="Info"
          value={value}
          icon={<QuestionMarkCircledIcon style={stylesBtn} />}
        />
        <BottomNavigationAction
          label="Bell"
          value={value}
          icon={<Bell style={stylesBtn} />}
        />
        <BottomNavigationAction
          label="Home"
          value={value}
          icon={<HomeIcon style={stylesBtn} />}
        />
      </BottomNavigation>
    </section>
  );
}
