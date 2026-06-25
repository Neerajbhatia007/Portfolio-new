import React, { useState, useEffect } from 'react';

function Taskbar({ openWindows, activeWindow, getTitle, onTaskClick, timezone = 'Asia/Kolkata' }) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const options = {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    // second: '2-digit',
    hour12: true,
  };

  let display;
  try {
    if (timezone === 'system' || !timezone) {
      display = new Intl.DateTimeFormat(undefined, options).format(now);
    } else {
      display = new Intl.DateTimeFormat('en-IN', { ...options, timeZone: timezone }).format(now);
    }
  } catch {
    display = now.toLocaleString();
  }

  return (
    <div className="taskbar">
      <button className="start-button">
        <span>🪟</span>
        Start
      </button>
      <div className="taskbar-apps">
        {openWindows.map((w) => (
          <button
            key={w}
            className={`taskbar-app${activeWindow === w ? ' taskbar-app-active' : ''}`}
            onClick={() => onTaskClick(w)}
          >
            {getTitle(w)}
          </button>
        ))}
      </div>
      <div className="taskbar-time">{display}</div>
    </div>
  );
}

export default Taskbar;
