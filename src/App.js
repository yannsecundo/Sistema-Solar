import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';

class App extends React.Component {
  render() {
    return (
      <>
        <Header titulo="Sistema Solar" />
        <SolarSystem>
          <Title />
        </SolarSystem>
      </>
    );
  }
}

export default App;
