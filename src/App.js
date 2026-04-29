import React, { useState } from 'react';
import './App.css';
import Desktop from './components/Desktop';
import Window from './components/Window';
import Taskbar from './components/Taskbar';

function App() {
  const [openWindows, setOpenWindows] = useState([]);

  const openWindow = (windowType) => {
    if (!openWindows.includes(windowType)) {
      setOpenWindows([...openWindows, windowType]);
    }
  };

  const closeWindow = (windowType) => {
    setOpenWindows(openWindows.filter(w => w !== windowType));
  };

  const icons = [
    { id: 'myComputer', name: 'My Computer', icon: '🖥️' },
    { id: 'myDocuments', name: 'My Documents', icon: '📁' },
    { id: 'recycleBin', name: 'Recycle Bin', icon: '🗑️' },
    { id: 'internetExplorer', name: 'Internet Explorer', icon: '🌐' }
  ];

  const getWindowContent = (windowType) => {
    switch (windowType) {
      case 'myComputer':
        return {
          title: 'My Computer',
          content: (
            <div className="window-content">
              <h2>About Me</h2>
              <p>Hello! I'm Neeraj Bhatia, a passionate developer with expertise in React, JavaScript, and Node.js.</p>
              <p>I love creating innovative solutions and have experience in building responsive web applications.</p>
              <div className="drives">
                <div className="drive">📀 Local Disk (C:)</div>
                <div className="drive">💿 CD-ROM Drive (D:)</div>
              </div>
            </div>
          )
        };
      case 'myDocuments':
        return {
          title: 'My Documents',
          content: (
            <div className="window-content">
              <h2>My Experience & Projects</h2>
              <div className="folder-section">
                <h3>💼 Work Experience</h3>
                <ul>
                  <li>Position at Company (Year) - Description</li>
                  <li>Position at Company (Year) - Description</li>
                </ul>
              </div>
              <div className="folder-section">
                <h3>🚀 Projects</h3>
                <ul>
                  <li>Project Name - Technologies used</li>
                  <li>Project Name - Technologies used</li>
                </ul>
              </div>
            </div>
          )
        };
      case 'recycleBin':
        return {
          title: 'Recycle Bin',
          content: (
            <div className="window-content">
              <h2>Contact Information</h2>
              <p>Feel free to reach out!</p>
              <div className="contact-info">
                <p>📱 Phone: 9034025912</p>
                <p>📧 Email: bhatiaji1357@gmail.com</p>
              </div>
            </div>
          )
        };
      case 'internetExplorer':
        return {
          title: 'Internet Explorer',
          content: (
            <div className="window-content">
              <h2>My Online Presence</h2>
              
              <div className="links">
                <a href="https://github.com/Neerajbhatia007" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/neeraj-bhatia-17b5901a7/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://neerajbhatia007.github.io/Personal-portfolio.github.io/" target="_blank" rel="noopener noreferrer">Portfolio Website</a>
              </div>
            </div>
          )
        };
      default:
        return { title: 'Window', content: <div>Content</div> };
    }
  };

  const getTitle = (windowType) => getWindowContent(windowType).title;

  return (
    <div className="desktop">
      <Desktop icons={icons} onOpen={openWindow} />

      {openWindows.map(windowType => {
        const { title, content } = getWindowContent(windowType);
        return (
          <Window key={windowType} title={title} onClose={() => closeWindow(windowType)}>
            {content}
          </Window>
        );
      })}

      <Taskbar openWindows={openWindows} getTitle={getTitle} onTaskClick={(w) => closeWindow(w)} />
    </div>
  );
}

export default App;
