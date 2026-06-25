import React from 'react';

function Window({ title, children, onClose, onFocus, isActive, path, status, position }) {
  return (
    <div
      className={`window${isActive ? ' window-active' : ''}`}
      style={position}
      onMouseDown={onFocus}
    >
      <div className="window-title-bar">
        <span className="window-title">{title}</span>
        <button className="window-close" onClick={onClose}>✕</button>
      </div>
      
      {path && (
        <div className="window-address">
          <span>Address</span>
          <code>{path}</code>
        </div>
      )}
      <div className="window-body">{children}</div>
      {status && <div className="window-status">{status}</div>}
    </div>
  );
}

export default Window;
