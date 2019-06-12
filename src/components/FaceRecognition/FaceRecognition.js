import React from 'react';
import './FaceRecognition.scss'

const FaceRecognition = ({imageUrl, box}) => {
  return (
    <div className={"center ma"}>
      <div className={"absolute br2 mt4 "}>
        <img id={"inputimage"} className={`br2 shadow-4 ${imageUrl.length < 10 ? "d-none" : ''}`} src={imageUrl} alt="url" width={"700px"} height={"auto"}/>
        <div className={"bounding-box"} style={{
          top: box.topRow,
          right: box.rightCol,
          bottom: box.bottomRow,
          left: box.leftCol}}>
        </div>
      </div>
    </div>
  )
};

export default FaceRecognition;