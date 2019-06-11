import React from 'react';
import Tilt from 'react-tilt';

const Logo = () => {
  return (
  <div className={"ma4"} style={{marginTop: -26}}>
    <Tilt className={"Tilt br2 shadow-2"} options={{ max : 40}} style={{ height: 120, width: 120 }}>
      <div className={"Tilt-inner"}>
        <img className={"logo"} src="https://www.pinclipart.com/picdir/big/23-231105_facial-recognition-icon-face-recognition-icon-png-clipart.png" alt="logo"/>
        <small>Facial Recognition</small>
      </div>
    </Tilt>
  </div>
  )
};

export default Logo;