import React from 'react';

class BoxColor extends React.Component {
  render() {
    const { r, g, b } = this.props;
    const averageLightness =
      [r, g, b].reduce((total, value) => total + value, 0) / 3;
    const textColor = averageLightness > 255 / 2 ? 'black' : 'white';
    const divStyle = {
      backgroundColor: `rgb(${r}, ${g}, ${b})`,
      color: textColor,
    };
    // const toHex = ([r, g, b]) {
    //   let rHex = parseInt(r).toString(16);
    // }
    return (
      <div className="single-box-color" style={divStyle}>
        <h3>
          rgb({r},{g},{b})
        </h3>
      </div>
    );
  }
}

export default BoxColor;
