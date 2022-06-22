import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <>
        <Header titulo="Sistema Solar" />
        <SolarSystem />
      </>
    );
  }
}

export default App;
