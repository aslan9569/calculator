import React, { useState } from "react";
import classes from "./main.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  allDelete,
  lastDelete,
  setCalc,
  setResult,
} from "../../../redux/reducer";

function Main(props) {
  const dispatch = useDispatch();
  const calc = useSelector((state) => state.calc);
  const ops = useSelector((state) => state.ops);

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    dispatch(setCalc(value));
  };
  const handleClick = (calc, value) => {
    if (!ops.includes(value)) {
      dispatch(setResult(eval(calc).toString()));
    }
  };
  const deleteLast = () => {
    dispatch(lastDelete());
  };
  const deleteAll = () => {
    dispatch(allDelete());
  };

  const createNumbers = () => {
    const numbers = [];
    for (let i = 9; i > 0; i--) {
      numbers.push(
        <button
          key={i}
          className={classes.del}
          onClick={() => updateCalc(i.toString())}
        >
          {i}
        </button>
      );
    }
    return numbers;
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div className={classes.numbersContainer}>
        <div className={classes.con}>
          <button className={classes.ac} onClick={deleteAll}>
            AC
          </button>
          <button className={classes.del} onClick={deleteLast}>
            DEL
          </button>
          <button className={classes.del} onClick={() => updateCalc("/")}>
            /
          </button>
        </div>
        <div className={classes.container}>
          <div className={classes.numCon}>{createNumbers()}</div>
          <div className={classes.signCon}>
            <div>
              <button className={classes.del} onClick={() => updateCalc("*")}>
                *
              </button>
            </div>
            <div>
              <button className={classes.del} onClick={() => updateCalc("+")}>
                +
              </button>
            </div>
            <div>
              <button className={classes.del} onClick={() => updateCalc("-")}>
                -
              </button>
            </div>
          </div>
        </div>
        <div className={classes.con}>
          <button className={classes.del} onClick={() => updateCalc(".")}>
            .
          </button>
          <button className={classes.del} onClick={() => updateCalc("0")}>
            0
          </button>
          <button className={classes.ac} onClick={() => handleClick(calc)}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;