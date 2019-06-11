import React from 'react';
import Tilt from 'react-tilt';

const logoUrl = "https://www.pinclipart.com/picdir/big/23-231105_facial-recognition-icon-face-recognition-icon-png-clipart.png";

const Logo = () => {
  return (
  <div className={"ma4"} style={{marginTop: -26}}>
    <Tilt className={"Tilt br2 shadow-2"} options={{ max : 40}} style={{ height: 120, width: 120 }}>
      <div className={"Tilt-inner"}>
        <img className={"logo"} src={logoUrl} alt="logo"/>
        <small>Facial Recognition</small>
      </div>
    </Tilt>
  </div>
  )
};

export default Logo;