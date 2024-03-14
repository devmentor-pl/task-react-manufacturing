import React, { useState, useEffect } from 'react';
import StyledResume from './Resume.styled';
import { ReactComponent as CloseIcon } from '../../icons/Close.svg';
import CV from '../../resume/CV.pdf';

const Resume = () => {
  const [isCVVisible, setCVVisible] = useState(false);

  const toggleCVVisibility = () => setCVVisible(!isCVVisible);

  useEffect(() => {
    const handleCloseOutside = (e) => {
      if (e.target.id === 'backdrop') {
        setCVVisible(false);
      }
    };

    document.addEventListener('click', handleCloseOutside);
    return () => document.removeEventListener('click', handleCloseOutside);
  }, []);

  return (
    <StyledResume>
      <h2 className="resume__heading">I also invite you to view my CV</h2>
      <button className="resume__show-btn" onClick={toggleCVVisibility}>
        Show My CV
      </button>
      {isCVVisible && (
        <div className="resume__backdrop" id="backdrop">
          <div className="resume__cv-container">
            <CloseIcon
              className="resume__close-btn"
              aria-label="Close navigation"
              tabIndex="0"
              onClick={() => setCVVisible(false)}
              role="button"
            />
            <iframe className="resume__iframe" src={CV} title="My CV"></iframe>
          </div>
        </div>
      )}
    </StyledResume>
  );
};

export default Resume;
