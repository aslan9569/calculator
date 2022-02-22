import React from "react";
import classes from "./header.module.css";
import { useSelector } from "react-redux";

function Header(props) {
  const calc = useSelector((state) => state.calc);
  const result = useSelector((state) => state.result);

  return (
    <div className={classes.header}>
      <div className={classes.payment}>{calc}</div>
      <div
        className={classes.result}
        >{calc === "" ? result : ""}</div>
    </div>
  );
}

export default Header;