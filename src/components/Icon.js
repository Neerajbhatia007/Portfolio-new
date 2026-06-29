import React from 'react';

function Icon({ icon, name, onDoubleClick }) {
  return (
    <div className="desktop-icon" onDoubleClick={onDoubleClick} tabIndex="0">
      <div className="icon-image">{icon}</div>
      <div className="icon-label">{name}</div>
      <div className="icon-tooltip" role="tooltip">
        Double click to open
      </div>
    </div>
  );
}

export default Icon;
