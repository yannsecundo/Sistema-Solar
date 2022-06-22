import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { PlanetName, PlanetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <img src={ PlanetImage } alt={ `Planeta ${PlanetName}` } />
        <p data-testid="planet-name">
          {PlanetName}
        </p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  PlanetName: PropTypes.string.isRequired,
  PlanetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
