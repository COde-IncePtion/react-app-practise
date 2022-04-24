import React from 'react';

const Modal = ({ playerInfo, onClose }) => (
  <div className="banner-layout">
    <div className="winner-banner">
      <div className="close-btn-wrapper">
        <button onClick={onClose}><span className="close-btn-text">&times;</span></button>
      </div>
      <h1>{playerInfo.player} Wins the Match!!!</h1>
    </div>
  </div>
);

export default Modal;
