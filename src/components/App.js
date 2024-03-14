import React from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import TechStack from './TechStack/TechStack';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <AboutMe />
        <TechStack />
        <h1 style={{ height: '30vh', backgroundColor: 'rebeccapurple' }}>
          Footer section
        </h1>
      </>
    );
  }
}
