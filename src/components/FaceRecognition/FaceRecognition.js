import React from 'react';

const FaceRecognition = ({imageUrl}) => {
  return (
    <div className={"center ma"}>
      <div className={"absolute br2 mt4 "}>
        <img className={"br2 shadow-4"} src={imageUrl} alt="url" width={"700px"} height={"auto"}/>
      </div>
    </div>
  )
};

export default FaceRecognition;