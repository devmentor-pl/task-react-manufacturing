import React from 'react';
import StyledTechStack from './TechStack.styled';

const TechStack = () => {
  return (
    <StyledTechStack>
      <h2 className="techstack__title">Tech stack</h2>
      <div className="carousel">
        <div className="carousel__track">
          {Array(2).fill(
            <React.Fragment>
              <div className="tech-icon">JS</div>
              <div className="tech-icon">HTML</div>
              <div className="tech-icon">CSS</div>
              <div className="tech-icon">React</div>
            </React.Fragment>
          )}
        </div>
      </div>
    </StyledTechStack>
  );
};

export default TechStack;
