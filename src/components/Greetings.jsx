import React from 'react';

class Greetings extends React.Component {
  render() {
    const { lang, children } = this.props;
    let greeting = 'Hello';
    switch (lang) {
      case 'de':
        greeting = 'Hallo';
        break;
      case 'fr':
        greeting = 'Bonjour';
        break;
      case 'sp':
        greeting = 'Hola';
        break;
      default:
        greeting = 'Hello';
    }
    return (
      <div className="single-greeting">
        <h3>
          {greeting} {children}
        </h3>
      </div>
    );
  }
}

export default Greetings;
