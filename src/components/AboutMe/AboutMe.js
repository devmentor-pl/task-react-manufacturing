import React from 'react';
import StyledAboutMe from './AboutMe.styled';
import profilePicDesktop from '../../img/ProfileDesktop.png';
import profilePicTablet from '../../img/ProfileTablet.png';
import profilePicMobile from '../../img/ProfileMobile.png';
import Underline from '../Underline';

const AboutMe = () => {
  return (
    <StyledAboutMe id="about">
      <h2 className="aboutme__title">
        <Underline>About Me</Underline>
      </h2>
      <div className="aboutme__content">
        <div className="aboutme__text">
          <p className="aboutme__paragraph">
            I am an enthusiastic front-end developer who has been continuously
            expanding knowledge and skills in the fascinating world of user
            interface creation. I have been learning programming for 1.5 year
            and plan on changing the profession. My passions include coding,
            technological innovations, and the world of MMORPG games.
          </p>
        </div>
        <div className="aboutme__image">
          <picture>
            <source srcSet={profilePicMobile} media="(max-width: 600px)" />
            <source srcSet={profilePicTablet} media="(max-width: 900px)" />
            <img
              src={profilePicDesktop}
              alt="Maciej Nęcka profile picture"
              className="aboutme__photo"
              width="800"
              height="600"
            />
          </picture>
        </div>
      </div>
    </StyledAboutMe>
  );
};

export default AboutMe;
