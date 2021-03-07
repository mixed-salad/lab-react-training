import React from 'react';

class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      bgcolor: ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
    };
  }

  //Public class field syntax
  //Any method that needs to be passed to an onSomthing attribute
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    let bgcolorIndex = this.state.count % 6;
    let buttonStyle = {
      backgroundColor: this.state.bgcolor[bgcolorIndex],
    };
    return (
      <div className="like-button">
        <button
          className="button"
          onClick={this.incrementCount}
          style={buttonStyle}
        >
          {this.state.count} Like{this.state.count !== 1 && 's'}
        </button>
      </div>
    );
  }
}

export default LikeButton;
