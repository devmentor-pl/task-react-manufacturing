import React from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import TechStack from './TechStack';
import Projects from './Projects';
import Contact from './Contact/Contact';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <AboutMe />
        <TechStack />
        <Projects />
        <Contact />
      </>
    );
  }
}
