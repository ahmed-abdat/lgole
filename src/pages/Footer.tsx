import * as React from "react";
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
  const [value, setValue] = React.useState("/");

  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    console.log(event);
    
    setValue(newValue);
    switch (newValue) {
      case "settings":
        navigate("/settings");
        break;
      case "Info":
        navigate("/info");
        break;
      case "bell":
        navigate("/bell");
        break;
      case "/":
        navigate("/");
        break;
      default:
        navigate("/");
        break;
    }
  };

  const stylesBtn = {
    width: 20,
    height: 20,
  };

  return (
      <section  className="fixed bottom-0 left-0 w-screen bg-slate-50">
        <BottomNavigation  sx={{ width : '100%' , minHeight : '9dvh' , background : 'inherit' }} value={value} onChange={handleChange}>
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
