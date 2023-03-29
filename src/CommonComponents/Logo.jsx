import logo from "../images/logo.png";
import React from 'react';

function Logo(props) {
  const {height = 32, width = 32} = props;
  return (
    <div>
        <img src={logo} alt='logo' height={height} width={width} />
    </div>
  )
}

export default Logo;