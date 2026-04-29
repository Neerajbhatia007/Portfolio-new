import React from 'react';

function Icon({ icon, name, onDoubleClick }) {
  return (
    <div className="desktop-icon" onDoubleClick={onDoubleClick}>
      <div className="icon-image">{icon}</div>
      <div className="icon-label">{name}</div>
    </div>
  );
}

export default Icon;
