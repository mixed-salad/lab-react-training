import React from 'react';
import profiles from './../data/berlin.json';

class Facebook extends React.Component {
  constructor() {
    super();
    this.state = {
      profiles: profiles,
      selectedCountry: '',
    };
  }

  setCountry = (input) => {
    this.setState({ selectedCountry: input });
  };

  render() {
    let countryButtons = ['All'];

    for (let profile of this.state.profiles) {
      if (!countryButtons.find((country) => country === profile.country)) {
        countryButtons.push(profile.country);
      }
    }

    return (
      <div>
        <div className="country-buttons">
          {countryButtons.map((country) => {
            return (
              <button
                onClick={this.setCountry}
                className="single-country-button"
              >
                {country}
              </button>
            );
          })}
        </div>
        <ul>
          {this.state.profiles.map((profile) => {
            return (
              <div className="single-id-card">
                <img
                  className="id-picture"
                  src={profile.img}
                  alt={(profile.firstName, profile.lastName)}
                />
                <div className="id-info">
                  <p>
                    <b>First name:</b> {profile.firstName}
                  </p>
                  <p>
                    <b>Last name:</b> {profile.lastName}
                  </p>
                  <p>
                    <b>Country:</b> {profile.country}
                  </p>
                  <p>
                    <b>Type:</b> {(profile.isStudent && 'Student') || 'Teacher'}
                  </p>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Facebook;
