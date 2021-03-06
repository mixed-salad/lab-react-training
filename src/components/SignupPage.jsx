import React from 'react';

class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      nationality: null,
      valid: null,
    };
  }

  handleNationality = (event) => {
    const value = event.target.value;
    this.setState({
      nationality: value,
    });
  };

  checkEmail = (event) => {
    const value = event.target.value;
    const regEx = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (value.match(regEx)) {
      this.setState({
        valid: true,
      });
    } else {
      this.setState({
        valid: false,
      });
    }
    console.log(this.state.valid);
  };

  handleSubmission = (event) => {
    event.preventDefault();
    // const name = event.target.name;
    // const value = event.target.value;
    console.log(event);
    const email = event.target[0].value;
    const password = event.target[1].value;
    const nationality = event.target[3].value;

    this.setState({
      email: email,
      password: password,
      nationality: nationality,
      // [name]: value,
    });
  };

  render() {
    // const passwordIsValid = this.state.password.length > 7;
    // const emailIsValid = new RegExp(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/).test(
    //   this.state.email
    // );
    return (
      <div>
        <form onSubmit={this.handleSubmission}>
          <label htmlFor="input-email">Email</label>
          <input
            onChange={this.checkEmail}
            type="email"
            id="input-email"
            placeholder="Email"
            name="email"
            value={this.state.email}
            className={(this.state.valid && 'valid') || 'invalid'}
          />
          <p className={(!this.state.valid && 'error') || 'non-error'}>
            Please enter valid email.
          </p>
          <label htmlFor="input-password">Password</label>
          <input
            type="password"
            name="password"
            id="input-password"
            placeholder="Password"
            value={this.state.password}
          />
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
        <p>
          Your email address is {(this.state.valid && 'correct') || 'incorrect'}
        </p>
      </div>
    );
  }
}

export default SignupPage;
