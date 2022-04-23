import React from 'react';

const Modal = ({ playerInfo }) => (
  <div className="banner-layout">
    <div className="winner-banner">
      <h1>{playerInfo.player} Wins the Match!!!</h1>
    </div>
  </div>
);

export default Modal;
