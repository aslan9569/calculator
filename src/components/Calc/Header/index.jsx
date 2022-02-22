import React from "react";
import classes from "./header.module.css";
import { useSelector } from "react-redux";

function Header(props) {
  const calc = useSelector((state) => state.calc);
  const result = useSelector((state) => state.result);

  return (
    <div className={classes.header}>
      <input type="text" className={classes.payment} value={calc} />
      <input
        type="text"
        className={classes.result}
        value={calc === "" ? result : ""}
      />
    </div>
  );
}

export default Header;