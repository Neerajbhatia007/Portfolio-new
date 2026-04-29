import React from 'react';

function Window({ title, children, onClose }) {
  return (
    <div className="window">
      <div className="window-title-bar">
        <span className="window-title">{title}</span>
        <button className="window-close" onClick={onClose}>✕</button>
      </div>
      <div className="window-body">{children}</div>
    </div>
  );
}

export default Window;
