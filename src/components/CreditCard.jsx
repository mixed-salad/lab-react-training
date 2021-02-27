import React from 'react';

class CreditCard extends React.Component {
  render() {
    const {
      type,
      number,
      expirationMonth,
      expirationYear,
      bank,
      owner,
      bgColor,
      color,
    } = this.props;

    const divStyle = {
      backgroundColor: `${bgColor}`,
      color: `${color}`,
    };

    let typeImagePath;
    switch (type) {
      case 'Visa':
        typeImagePath = `https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg`;
        break;
      case 'Master Card':
        typeImagePath = `https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg`;
        break;
      default:
        typeImagePath = `https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg`;
    }

    // Separating the numbers
    // let cardNumberSpaced = number.replace(/(\d{4}(?!\s))/g, '$1 ');
    const last4Digits = number.slice(-4);
    console.log(last4Digits);
    // const cardNumberArray = cardNumberSpaced.trim().split(' ');
    const displayedNumber = `•••• •••• •••• ${last4Digits}`;
    return (
      <div className="single-credit-card" style={divStyle}>
        <img
          className="credit-card-type-image"
          src={typeImagePath}
          alt={type}
        />
        <div className="credit-card-info">
          <p className="credit-card-number">{displayedNumber}</p>
          <div className="credit-card-dates-name">
            <p>
              Expires {expirationMonth}/{expirationYear} <span>{bank}</span>
            </p>
            <p>{owner}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CreditCard;
