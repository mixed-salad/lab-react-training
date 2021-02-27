import React from 'react';

class Random extends React.Component {
  render() {
    const { min, max } = this.props;
    let randomNumber = Math.floor(Math.random() * (max - min) + min);
    return (
      <div className="single-random">
        <h3>
          Random value between {min} and {max} = > {randomNumber}
        </h3>
      </div>
    );
  }
}

export default Random;
