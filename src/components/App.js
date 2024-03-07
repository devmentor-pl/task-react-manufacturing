import React from 'react';
import Header from './Header';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <h1 style={{ height: '50vh' }}>Main section</h1>
        <h1 style={{ height: '30vh', backgroundColor: 'rebeccapurple' }}>
          Footer section
        </h1>
      </>
    );
  }
}
