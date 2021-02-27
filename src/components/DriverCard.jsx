import React from 'react';
import Rating from './Rating';

class DriverCard extends React.Component {
  render() {
    const { name, rating, img, car } = this.props;

    return (
      <div className="single-driver-card">
        <div>
          <img className="driver-img" src={img} alt={name} />
        </div>
        <div>
          <h3>{name}</h3>
          <Rating>{rating}</Rating>
          <small>
            {car.model} - {car.licensePlate}
          </small>
        </div>
      </div>
    );
  }
}

export default DriverCard;
