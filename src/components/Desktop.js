import React from 'react';
import Icon from './Icon';

function Desktop({ icons, onOpen }) {
  return (
    <div className="desktop-icons">
      {icons.map((ic) => (
        <Icon
          key={ic.id}
          icon={ic.icon}
          name={ic.name}
          onDoubleClick={() => onOpen(ic.id)}
        />
      ))}
    </div>
  );
}

export default Desktop;
