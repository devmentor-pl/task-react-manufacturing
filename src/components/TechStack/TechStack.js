import React from 'react';
import StyledTechStack from './TechStack.styled';
import Underline from '../Underline';
import jsLogo from '../../logos/js-logo.svg';
import htmlLogo from '../../logos/html-logo.svg';
import cssLogo from '../../logos/css-logo.svg';
import reactLogo from '../../logos/react-logo.svg';
import npmLogo from '../../logos/npm-logo.svg';
import apiLogo from '../../logos/api-logo.svg';
import babelLogo from '../../logos/babel-logo.svg';
import gitLogo from '../../logos/git-logo.svg';
import sassLogo from '../../logos/sass-logo.svg';
import webpackLogo from '../../logos/webpack-logo.svg';
import Resume from '../Resume';

const TechStack = () => {
  const icons = [
    { label: 'React', src: reactLogo, name: 'React' },
    { label: 'JS', src: jsLogo, name: 'JavaScript' },
    { label: 'HTML', src: htmlLogo, name: 'HTML' },
    { label: 'CSS', src: cssLogo, name: 'CSS' },
    { label: 'API', src: apiLogo, name: 'Rest API' },
    { label: 'Babel', src: babelLogo, name: 'Babel' },
    { label: 'Git', src: gitLogo, name: 'Git' },
    { label: 'Sass', src: sassLogo, name: 'Sass' },
    { label: 'Webpack', src: webpackLogo, name: 'Webpack' },
    { label: 'npm', src: npmLogo, name: 'Npm' },
  ];

  return (
    <StyledTechStack id="techStack">
      <div className="techstack__header">
        <h2 className="techstack__title">
          <Underline>Tech stack</Underline>
        </h2>
        <p className="techstack__paragraph">
          Each icon below represents a technology I've mastered as part of my
          development toolkit.
        </p>
      </div>
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
      <Resume />
    </StyledTechStack>
  );
};

export default TechStack;
