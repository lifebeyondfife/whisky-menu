import React from 'react';
import './WhiskyName.css';

function WhiskyName({whisky}) {
  return (
    <div className="container">
      <span className="left">{whisky.name}</span>
      <span className="right">{whisky.location.region || whisky.location.country}</span>
      <span className="centre">&nbsp;</span>
    </div>
  );
}

export default WhiskyName;