import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const Footer = () => {
  return (
    <BottomNavigation sx={{ width: 500 }}>
      <BottomNavigationAction icon={<PhoneIcon />} />
      <BottomNavigationAction icon={<FacebookIcon />} />
      <BottomNavigationAction icon={<WhatsAppIcon />} />
    </BottomNavigation>
  );
};
