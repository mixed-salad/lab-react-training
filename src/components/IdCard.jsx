import React from 'react';

class IdCard extends React.Component {
  render() {
    const { lastName, firstName, gender, height, birth, picture } = this.props;
    return (
      <div className="single-id-card">
        <img className="id-picture" src={picture} alt={(firstName, lastName)} />
        <div className="id-info">
          <p>
            <b>First name:</b> {firstName}
          </p>
          <p>
            <b>Last name:</b> {lastName}
          </p>
          <p>
            <b>Gender:</b> {gender}
          </p>
          <p>
            <b>Height:</b> {height}
          </p>
          <p>
            <b>Birth:</b> {birth.toUTCString()}
          </p>
        </div>
      </div>
    );
  }
}

export default IdCard;
