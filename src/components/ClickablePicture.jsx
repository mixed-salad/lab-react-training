import React from 'react';

class ClickablePicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
    };
  }

  toggleActive = () => {
    this.setState({ active: !this.state.active });
  };
  //Public class field syntax
  //Any method that needs to be passed to an onSomthing attribute

  render() {
    const { img, imgClicked } = this.props;
    return (
      <div className="toggle-picture">
        <img
          onClick={this.toggleActive}
          src={(this.state.active && img) || imgClicked}
          alt=""
        />
      </div>
    );
  }
}

export default ClickablePicture;
