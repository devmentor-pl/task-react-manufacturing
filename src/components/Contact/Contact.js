import React from 'react';
import StyledContact from './Contact.styled';
import Underline from '../Underline';
import { ReactComponent as MailIcon } from '../../icons/MailIcon.svg';

const Contact = () => (
  <StyledContact id="contact">
    <div className="contact__info">
      <h2 className="contact__heading">
        <Underline>Let's connect!</Underline>
      </h2>
      <p className="contact__paragraph">
        If you're interested in my work and think we could create something
        great together, don't hestiate to reach out.
      </p>
      <a
        href="mailto:macieknecka@gmail.com"
        className="contact__button"
        type="button"
      >
        Contact me <MailIcon className="contact__button--icon" />
      </a>
    </div>
  </StyledContact>
);

export default Contact;
