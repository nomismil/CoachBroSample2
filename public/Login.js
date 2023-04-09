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
      accountType: form.accountType.value
    };
    this.props.login(member);
    form.username.value = "";
    form.password.value = "";
  }
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "login"
    }, /*#__PURE__*/React.createElement("div", {
      className: "auth-form-container"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "auth-form-header"
    }, "Welcome to CoachBRO!"), /*#__PURE__*/React.createElement("form", {
      name: "loginform",
      className: "login-form",
      onSubmit: this.handleSubmit
    }, /*#__PURE__*/React.createElement("label", null, "Username:"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      placeholder: "username",
      name: "username"
    }), /*#__PURE__*/React.createElement("label", null, "Password:"), /*#__PURE__*/React.createElement("input", {
      type: "password",
      placeholder: "********",
      name: "password"
    }), /*#__PURE__*/React.createElement("label", null, "Account Type:"), /*#__PURE__*/React.createElement("select", {
      name: "accountType"
    }, /*#__PURE__*/React.createElement("option", null, "Ordinary"), /*#__PURE__*/React.createElement("option", null, "Trainer")), /*#__PURE__*/React.createElement("button", {
      className: "loginButton"
    }, "Log In")), /*#__PURE__*/React.createElement("a", {
      href: "/#/register"
    }, /*#__PURE__*/React.createElement("button", {
      className: "login-register-link-btn"
    }, "Don't have an account? Register here."))), /*#__PURE__*/React.createElement("footer", {
      className: "privacy-notice"
    }, /*#__PURE__*/React.createElement("p", null, "This site uses cookies. By continuing to use this site, you agree to our use of cookies. For more details, please see our", " ", /*#__PURE__*/React.createElement("a", {
      href: "https://www.nus.edu.sg/privacy-notice/"
    }, "Privacy Policy")))));
  }
}
export default Login;