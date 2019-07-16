import React from "react";
import style from "../../../styles.module.scss";

const OperatorButton = ({ operator }) => {
  return (
    <>
      {
        /* Display a button element rendering the data being passed down from the parent container on props */
        <button className={style.btn}>{operator}</button>
      }
    </>
  );
};

export default OperatorButton;
