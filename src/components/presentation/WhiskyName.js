import React from 'react';
import './WhiskyName.css';

function WhiskyName({whisky}) {
  const showHideWhiskyDetails = () => {};
  return (
    <div className="container">
      <span className="left">{whisky.name}</span>
      <span className="right"><button onClick={showHideWhiskyDetails}>v</button></span>
      <span className="centre">&nbsp;</span>
    </div>
  );
}

export default WhiskyName;