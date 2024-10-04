import PropTypes from "prop-types";
import "./SignIn.css";
import { Component } from "react";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: "",
    };
  }

  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  };

  onSubmitSignIn = () => {
    fetch("http://localhost:3000/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(`Server error: ${text}`);
          });
        }
        return response.json();
      })
      .then((data) => {
        if (data.id) {
          // Assuming `data` is a user object with an 'id' property
          this.props.onRouteChange("home");
        } else {
          console.error("Signin failed:", data);
        }
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <div className="center">
        <article className="outline br3 ba mv4 w-100 w-50-m w-25-l mw6 shadow-6">
          <main className="pa5 black-80">
            <form className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0 center">Sign In</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f4" htmlFor="email-address">
                    Email
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black-60 hover-white w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={this.onEmailChange}
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f4" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black-60 hover-white w-100"
                    type="password"
                    name="password"
                    id="password"
                    onChange={this.onPasswordChange}
                  />
                </div>
              </fieldset>
              <div>
                <input
                  onClick={this.onSubmitSignIn}
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib w-100"
                  type="button"
                  value="Sign in"
                />
              </div>
              <div className="lh-copy mt3">
                <a
                  onClick={() => onRouteChange("register")}
                  href="#0"
                  className="f5 link dim black db pointer tc"
                >
                  Register
                </a>
                <a href="#0" className="f5 link dim black db tc">
                  Forgot your password?
                </a>
              </div>
            </form>
          </main>
        </article>
      </div>
    );
  }
}

SignIn.propTypes = {
  onRouteChange: PropTypes.func.isRequired,
};

export default SignIn;
