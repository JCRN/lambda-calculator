import React from "react";
import style from "../../../styles.module.scss";

const SpecialButton = ({ special }) => {
  return (
    <>
      {
        /* Display a button element rendering the data being passed down from the parent container on props */
        <button className={style.specialBtn}>{special}</button>
      }
    </>
  );
};

export default SpecialButton;
