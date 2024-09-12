import React from "react";
import { PointMenuIcon } from "@/assets/svgs";

/**
 *
 * @param {boolean}
 * @returns {JSX.Element}
 */
const MenuIcon: React.FC<{ isMenuVisible: boolean }> = ({ isMenuVisible }) => {
  return <PointMenuIcon isMenuVisible={isMenuVisible} />;
};

export default MenuIcon;
