import React from 'react';

class Rating extends React.Component {
  render() {
    const { children } = this.props;
    const ratingInt = Math.round(children);
    return (
      <div className="single-rating">
        <p>
          {'★'.repeat(ratingInt)}
          {'☆'.repeat(5 - ratingInt)}
        </p>
      </div>
    );
  }
}

export default Rating;
