import React from "react";
import style from "../../../styles.module.scss";

const NumberButton = ({ number }) => {
  return (
    <>
      {
        /* Display a button element rendering the data being passed down from the parent container on props */
        <button className={style.numberBtn}>{number}</button>
      }
    </>
  );
};

export default NumberButton;
