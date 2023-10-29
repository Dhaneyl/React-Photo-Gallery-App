import React from 'react'
import "../styles/Images.css"

function ImageComponent(props) {
    const { image, text } = props;
  
    return (
      <div className='Image-card'>
        <img src={image} alt="Image" />
        <p className='description'>{text}</p>
      </div>
    );
  }
  
  export default ImageComponent;