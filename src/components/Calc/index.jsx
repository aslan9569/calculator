import React, { useState } from "react";
import classes from "./calc.module.css";
import Header from "./Header";
import Main from "./Main";

function Calc(props) {
  return (
    <div className={classes.calc}>
      <Header />
      <Main />
    </div>
  );
}

export default Calc;