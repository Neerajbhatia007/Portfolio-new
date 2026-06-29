import React, { useState, useEffect } from 'react';

function Taskbar({
  openWindows,
  activeWindow,
  getTitle,
  onTaskClick,
  apps,
  onOpenApp,
  profile,
  timezone = 'Asia/Kolkata',
}) {
  const [now, setNow] = useState(new Date());
  const [isStartOpen, setIsStartOpen] = useState(false);

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
      {isStartOpen && (
        <div className="start-menu">
          <div className="start-menu-header">
            <strong>{profile.name}</strong>
            <span>{profile.role}</span>
          </div>
          <div className="start-menu-apps">
            {apps.map((app) => (
              <button
                key={app.id}
                onClick={() => {
                  onOpenApp(app.id);
                  setIsStartOpen(false);
                }}
              >
                <span>{app.icon}</span>
                {app.name}
              </button>
            ))}
          </div>
          <div className="start-menu-footer">
            <span>{profile.email}</span>
            <span>{profile.location}</span>
          </div>
        </div>
      )}

      <button
        className={`start-button${isStartOpen ? ' start-button-active' : ''}`}
        aria-expanded={isStartOpen}
        onClick={() => setIsStartOpen((open) => !open)}
      >
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
