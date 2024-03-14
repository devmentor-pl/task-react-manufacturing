import React from 'react';
import StyledTechStack from './TechStack.styled';
import jsLogo from '../../logos/js-logo.svg';
import htmlLogo from '../../logos/html-logo.svg';
import cssLogo from '../../logos/css-logo.svg';
import reactLogo from '../../logos/react-logo.svg';

const TechStack = () => {
  const icons = [
    { label: 'JS', src: jsLogo, name: 'JavaScript' },
    { label: 'HTML', src: htmlLogo, name: 'HTML' },
    { label: 'CSS', src: cssLogo, name: 'CSS' },
    { label: 'React', src: reactLogo, name: 'React' },
    { label: 'JS', src: jsLogo, name: 'JavaScript' },
    { label: 'HTML', src: htmlLogo, name: 'HTML' },
    { label: 'CSS', src: cssLogo, name: 'CSS' },
    { label: 'React', src: reactLogo, name: 'React' },
    { label: 'JS', src: jsLogo, name: 'JavaScript' },
    { label: 'HTML', src: htmlLogo, name: 'HTML' },
    { label: 'CSS', src: cssLogo, name: 'CSS' },
    { label: 'React', src: reactLogo, name: 'React' },
  ];

  return (
    <StyledTechStack>
      <h2 className="techstack__title">Tech stack</h2>
      <div className="techstack">
        <div className="techstack__carousel">
          <div className="techstack__carousel-track">
            {icons.concat(icons).map((icon, index) => (
              <div className="techstack__icon" key={index}>
                <img
                  className="techstack__icon-img"
                  src={icon.src}
                  alt={icon.label}
                />
                <p className="techstack__icon-name">{icon.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StyledTechStack>
  );
};

export default TechStack;
