import React from 'react';

class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      nationality: null,
    };
  }

  handleNationality = (event) => {
    const value = event.target.value;
    this.setState({
      nationality: value,
    });
  };

  handleSubmittion = (event) => {
    event.preventDefault();
    console.log(event);
    const email = event.target[0].value;
    const password = event.target[1].value;
    const nationality = event.target[3].value;

    this.setState({
      email: email,
      password: password,
      nationality: nationality,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmittion}>
          <label htmlFor="input-email">Email</label>
          <input type="email" id="input-email" placeholder="Email" />
          <label htmlFor="input-password">Password</label>
          <input type="password" id="input-password" placeholder="Password" />
          <label htmlFor="input-nationality">Nationality</label>
          <select
            onChange={this.handleNationality}
            name="nationality"
            id="input-nationality"
          >
            <option value="de">Germany</option>
            <option value="en">United Kingdom</option>
            <option value="fr">France</option>
          </select>
          <button>Sign up</button>
        </form>
        <hr />
        <p>
          {(this.state.nationality === 'en' && 'Hello') ||
            (this.state.nationality === 'fr' && 'Bon jour') ||
            (this.state.nationality === 'de' && 'Hallo')}
        </p>
        <p>Your email address is: {this.state.email}</p>
        {/* <p>Your email address is {this.state.email}</p> */}
      </div>
    );
  }
}

export default SignupPage;
