import React from "react";
import { MenuContext } from "../context";

export const useMenu = () => {
  const { menuItems, getMenuItems } = React.useContext(MenuContext);

  return { menuItems, getMenuItems };
};
