import React from 'react';
import StyledContact from './Contact.styled';
import { ReactComponent as MailIcon } from '../../icons/MailIcon.svg';

const Contact = () => (
  <StyledContact>
    <div className="contact__info">
      <h2 className="contact__heading">Let's connect!</h2>
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
