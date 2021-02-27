import React from 'react';

class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {
      imgCount: 0,
    };
  }

  nextImg = () => {
    if (this.state.imgCount < 4) {
      this.setState({ imgCount: this.state.imgCount + 1 });
    } else {
      this.setState({ imgCount: 0 });
    }
  };
  prevImg = () => {
    if (this.state.imgCount > 0) {
      this.setState({ imgCount: this.state.imgCount - 1 });
    } else {
      this.setState({ imgCount: 3 });
    }
  };
  //Public class field syntax
  //Any method that needs to be passed to an onSomthing attribute

  render() {
    const { imgs } = this.props;
    return (
      <div className="carousel">
        <img className="carousel-img" src={imgs[this.state.imgCount]} alt="" />
        <button onClick={this.nextImg}>Previous</button>
        <button onClick={this.prevImg}>Next</button>
      </div>
    );
  }
}

export default Carousel;
