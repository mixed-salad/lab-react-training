import React from 'react';
import profiles from './../data/berlin.json';

class Facebook extends React.Component {
  constructor() {
    super();
    this.state = {
      profiles: profiles,
      selectedCountry: null,
    };
  }

  handleCountrySelect = (country) => {
    this.setState({
      selectedCountry: country,
    });
  };
  // setColor() {
  //   this.setState({ selectedCountry: true });
  //   console.log('country:' + this.state.selectedCountry);
  // }

  render() {
    // let countryButtons = [];

    // for (let profile of this.state.profiles) {
    //   if (!countryButtons.find((country) => country === profile.country)) {
    //     countryButtons.push(profile.country);
    //   }
    // }

    const countries = this.state.profiles.reduce(
      (uniqueCountries, { country }) => {
        return uniqueCountries.includes(country)
          ? uniqueCountries
          : [...uniqueCountries, country];
      },
      []
    );

    return (
      <div>
        <span>{this.state.selectedCountry}</span>
        <div className="country-buttons">
          <button
            onClick={() => this.handleCountrySelect(null)}
            className={!this.state.selectedCountry && 'highlighted'}
          >
            All
          </button>
          {countries.map((country) => {
            return (
              <button
                key={country}
                onClick={() => this.handleCountrySelect(country)}
                className={
                  this.state.selectedCountry === country && 'highlighted'
                }
              >
                {country}
              </button>
            );
          })}
        </div>
        <div>
          {this.state.profiles.map((profile) => {
            return (
              <div
                key={profile.img}
                className={
                  !this.state.selectedCountry ||
                  this.state.selectedCountry === profile.country
                    ? 'highlighted'
                    : ''
                }
              >
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
        </div>
      </div>
    );
  }
}

export default Facebook;
