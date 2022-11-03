import { useEffect, useState } from "react";
import classes from "./burger-menu.module.css";
const BurgerMenu = ({ isOpen, changeMenu,className }) => {
  return (
    <>
      <div
        className={`${classes.menuBtn} ${isOpen ? classes.open : ""} ${className}`}
        onClick={() => changeMenu()}
      >
        <div className={classes.menuBtnBurger}></div>
      </div>
    </>
  );
};

export default BurgerMenu;