import React from 'react';
import Header from './Header';
import AboutMe from './AboutMe';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <AboutMe />
        <h1 style={{ height: '30vh', backgroundColor: 'rebeccapurple' }}>
          Footer section
        </h1>
      </>
    );
  }
}
