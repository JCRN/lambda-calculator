import React, { useState } from "react";
import style from "../../../styles.module.scss";

//import any components needed
import OperatorButton from "./OperatorButton.js";
//Import your array data to from the provided data file
import { operators } from "../../../data.js";

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorState, setOperatorState] = useState(operators);
  return (
    <div className={style.operatorBtnContainer}>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
      operatorState.map(operator => (
        <OperatorButton operator={operator.char} />
      ))}
    </div>
  );
};

export default Operators;
