
import React from 'react';
import '../styles/Modal.css'

function Modal({ imageUrl, alt, onClose }) {
  return (
    <div className="modal" onClick={onClose}>
      <span className="close" onClick={onClose}>&times;</span>
      <img src={imageUrl} alt={alt} />
    </div>
  );
}

export default Modal;
