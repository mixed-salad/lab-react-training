import React from 'react';

class Dice extends React.Component {
  constructor() {
    super();
    this.state = {
      number: Math.floor(Math.random() * 6),
      image: './img/dice3.png',
    };
  }

  handleClick = () => {
    // let newNumber = Math.floor(Math.random() * 7);
    this.setState({ image: './img/dice-empty.png' });
    setTimeout(() => {
      if (this.state.image === './img/dice-empty.png') {
        const dots = Math.ceil(Math.random() * 6);
        this.setState({
          image: `./img/dice${dots}.png`,
        });
      }
    }, 1000);
  };
  //Public class field syntax
  //Any method that needs to be passed to an onSomthing attribute

  render() {
    // const diceImage = [
    //   './img/dice-empty.png',
    //   './img/dice1.png',
    //   './img/dice2.png',
    //   './img/dice3.png',
    //   './img/dice4.png',
    //   './img/dice5.png',
    //   './img/dice6.png',
    // ];
    return (
      <div className="dice">
        <img onClick={this.handleClick} src={this.state.image} alt="" />
      </div>
    );
  }
}

export default Dice;
