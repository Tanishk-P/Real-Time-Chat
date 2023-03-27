import logo from "../images/logo.png";
import React from 'react';

function Logo() {
  return (
    <div>
        <img src={logo} alt='logo' height={32} width={32} />
    </div>
  )
}

export default Logo;