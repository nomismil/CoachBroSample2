class Login extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.loginform;
    const member = {
      username: form.username.value,
      password: form.password.value,
      accountType: form.accountType.value,
    }
    this.props.login(member);
    form.username.value = "";
    form.password.value = "";
  }

  render() {
    return (
      <>
        <div className="login">
          <div className="auth-form-container">
            <h2 className="auth-form-header">Welcome to CoachBRO!</h2>

            <form name="loginform" className="login-form" onSubmit={this.handleSubmit}>
              <label>Username:</label>
              <input
                type="text"
                placeholder="username"
                name="username"
              />
              <label>Password:</label>
              <input
                type="password"
                placeholder="********"
                name="password"
              />
              <label>Account Type:</label>
              <select name="accountType">
                <option>Ordinary</option>
                <option>Trainer</option>
              </select>
              <button className="loginButton">
                Log In
              </button>
            </form>

            <a href="/#/register">
              <button className="login-register-link-btn">
                Don't have an account? Register here.
              </button>
            </a>
          </div>

          <footer className="privacy-notice">
            <p>
              This site uses cookies. By continuing to use this site, you agree to
              our use of cookies. For more details, please see our{" "}
              <a href="https://www.nus.edu.sg/privacy-notice/">Privacy Policy</a>
            </p>
          </footer>
        </div>
      </>
    )
  }
}

export default Login;
