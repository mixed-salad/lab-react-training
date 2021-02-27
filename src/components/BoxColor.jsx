import React from 'react';

class BoxColor extends React.Component {
  render() {
    const { r, g, b } = this.props;
    const divStyle = {
      backgroundColor: `rgb(${r}, ${g}, ${b})`,
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
