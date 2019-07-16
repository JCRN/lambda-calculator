import React from "react";
import style from "../../styles.module.scss";

import logo from "../../Img/Lambda_Logo_white.png";

const Logo = () => {
  return (
    <div className={style.logoContainer}>
      <img className="logo" src={logo} alt="Lambda's logo" />
    </div>
  );
};

export default Logo;
