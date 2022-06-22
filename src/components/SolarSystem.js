import React from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import Imagem from '../images/Marte.png';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <PlanetCard PlanetName="Marte" PlanetImage={ Imagem } />
      </div>
    );
  }
}

export default SolarSystem;
