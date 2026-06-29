import React, { useState } from 'react';
import './App.css';
import Desktop from './components/Desktop';
import Window from './components/Window';
import Taskbar from './components/Taskbar';
import {
  certifications,
  desktopIcons,
  education,
  links,
  profile,
  projects,
  skills,
  windowMeta,
  workExperience,
} from './data/portfolioData';

function DesktopProfileCard() {
  return (
    <aside className="desktop-profile-card" aria-label="Portfolio summary">
      <p className="desktop-profile-kicker">Neeraj OS</p>
      <h1>{profile.name}</h1>
      <p>{profile.headline}</p>
      <div className="desktop-stats">
        {profile.quickStats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
      <p className="desktop-availability">{profile.availability}</p>
    </aside>
  );
}

function AboutWindow() {
  return (
    <div className="window-content about-window">
      <div className="profile-header">
        <p className="eyebrow">About Me</p>
        <h2>{profile.name}</h2>
        <p className="profile-title">{profile.role}</p>
        <p className="profile-location">{profile.location}</p>
      </div>

      <div className="summary-block">
        {profile.summary.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="stats-strip">
        {profile.quickStats.map((stat) => (
          <div className="stat-tile" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="folder-section">
        <h3>Career Highlights</h3>
        <ul className="detail-list">
          {profile.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>

      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <div className="skill-panel" key={category}>
            <h3>{category}</h3>
            <div className="tag-list">
              {items.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DocumentsWindow() {
  return (
    <div className="window-content">
      <h2>My Experience & Projects</h2>

      <div className="folder-section">
        <h3>Work Experience</h3>
        <div className="timeline">
          {workExperience.map((job) => (
            <article className="experience-card" key={`${job.company}-${job.role}`}>
              <div className="experience-meta">
                <div>
                  <h4>{job.role}</h4>
                  <p>{job.company}</p>
                </div>
                <span>{job.period}</span>
              </div>
              <p className="experience-location">{job.location}</p>
              <ul className="detail-list">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <div className="folder-section">
        <h3>Projects</h3>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <h4>{project.name}</h4>
              <p className="project-stack">{project.stack}</p>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="folder-section two-column">
        <section>
          <h3>Education</h3>
          <div className="info-card">
            <h4>{education.degree}</h4>
            <p>{education.school}</p>
            <p>
              {education.period} | {education.grade}
            </p>
          </div>
        </section>

        <section>
          <h3>Certifications</h3>
          <ul className="compact-list">
            {certifications.map((certification) => (
              <li key={certification}>{certification}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

function ContactWindow() {
  return (
    <div className="window-content">
      <h2>Contact Information</h2>
      <p>{profile.headline}</p>
      <div className="contact-info">
        <p>Phone: {profile.phone}</p>
        <p>Email: {profile.email}</p>
        <p>Location: {profile.location}</p>
      </div>
    </div>
  );
}

function LinksWindow() {
  return (
    <div className="window-content">
      <h2>My Online Presence</h2>
      <p>Professional profiles and portfolio links.</p>
      <div className="links">
        {links.map((link) => (
          <a href={link.url} target="_blank" rel="noopener noreferrer" key={link.url}>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [openWindows, setOpenWindows] = useState([]);
  const [activeWindow, setActiveWindow] = useState(null);

  const openWindow = (windowType) => {
    if (!openWindows.includes(windowType)) {
      setOpenWindows([...openWindows, windowType]);
    }
    setActiveWindow(windowType);
  };

  const closeWindow = (windowType) => {
    const nextOpenWindows = openWindows.filter(w => w !== windowType);
    setOpenWindows(nextOpenWindows);

    if (activeWindow === windowType) {
      setActiveWindow(nextOpenWindows[nextOpenWindows.length - 1] || null);
    }
  };

  const getWindowContent = (windowType) => {
    switch (windowType) {
      case 'myComputer':
        return {
          title: windowMeta.myComputer.title,
          content: <AboutWindow />,
        };
      case 'myDocuments':
        return {
          title: windowMeta.myDocuments.title,
          content: <DocumentsWindow />,
        };
      case 'recycleBin':
        return {
          title: windowMeta.recycleBin.title,
          content: <ContactWindow />,
        };
      case 'internetExplorer':
        return {
          title: windowMeta.internetExplorer.title,
          content: <LinksWindow />,
        };
      default:
        return { title: 'Window', content: <div>Content</div> };
    }
  };

  const getTitle = (windowType) => getWindowContent(windowType).title;

  return (
    <div className="desktop">
      <Desktop icons={desktopIcons} onOpen={openWindow} />
      <DesktopProfileCard />

      {openWindows.map(windowType => {
        const { title, content } = getWindowContent(windowType);
        const meta = windowMeta[windowType];
        return (
          <Window
            key={windowType}
            title={title}
            path={meta.path}
            status={meta.status}
            position={meta.position}
            isActive={activeWindow === windowType}
            onFocus={() => setActiveWindow(windowType)}
            onClose={() => closeWindow(windowType)}
          >
            {content}
          </Window>
        );
      })}

      <Taskbar
        openWindows={openWindows}
        activeWindow={activeWindow}
        getTitle={getTitle}
        onTaskClick={setActiveWindow}
        apps={desktopIcons}
        onOpenApp={openWindow}
        profile={profile}
      />
    </div>
  );
}

export default App;
