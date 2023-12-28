import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  CubeIcon,
  GearIcon,
  HomeIcon,
  QuestionMarkCircledIcon,
} from "@radix-ui/react-icons";
import { Bell } from "lucide-react";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("home");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const stylesBtn = {
    width: 20,
    height: 20,
  };

  return (
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
        value="home"
        icon={<HomeIcon style={stylesBtn} />}
      />
    </BottomNavigation>
  );
}
