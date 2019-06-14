import React from 'react';
import './ImageLinkForm.scss'

const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
  return (
    <div>
      <p className={"f3 p-color"}>
        {'Give a try for my face detection on your pictures!'}
      </p>
      <div className={"center"}>
        <div className={"form pa4 br3 shadow-5"}>
          <input className={"f4 pa2 mb4 w-100 center"} type="text" onChange={onInputChange} placeholder={"paste link of your image here..."}/>
          <button className={"w-30 f4 ph3 pv2 dib btn-color"} onClick={onPictureSubmit}>Detect</button>
        </div>
      </div>
    </div>
  )
};

export default ImageLinkForm;