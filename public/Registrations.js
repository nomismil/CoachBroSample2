import Navbar from "./Navbar.jsx";
export default function Registrations(props) {
  let memberExist = false;
  const onBlur = async e => {
    // after user enters username, send to backend to check if it exists
    let username = e.target.value;
    memberExist = await props.checkUsername(username);
    const inp = document.getElementById("usrname");
    if (memberExist) {
      inp.setCustomValidity("Username already exists."); // this will prevent submission of form
    } else {
      inp.setCustomValidity("");
    }
  };
  const handleSubmit = async e => {
    e.preventDefault();
    const form = document.forms.register;
    if (!memberExist) {
      const member = {
        username: form.username.value,
        password: form.password.value,
        accountType: form.accountType.value,
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        email: form.email.value,
        gender: form.gender.value,
        contact: form.contact.value,
        username: form.username.value,
        address: form.address.value,
        dob: form.dob.value
      };
      props.addMember({
        firstName: member.firstName,
        lastName: member.lastName,
        accountType: member.accountType,
        email: member.email,
        gender: member.gender,
        contactNo: member.contact,
        username: member.username,
        password: member.password,
        address: member.address,
        dob: member.dob
      });
      form.reset();
      memberExist = false;
      window.location.href = "/#/login/"; // redirect 
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "login"
  }, /*#__PURE__*/React.createElement("div", {
    className: "auth-form-container"
  }, /*#__PURE__*/React.createElement("h3", null, "New Member Registrations"), /*#__PURE__*/React.createElement("form", {
    name: "register",
    className: "login-form",
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("label", null, "First Name:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "First Name",
    name: "firstName",
    required: true
  }), /*#__PURE__*/React.createElement("label", null, "Last Name:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Last Name",
    name: "lastName",
    required: true
  }), /*#__PURE__*/React.createElement("label", null, "Account Type:"), /*#__PURE__*/React.createElement("select", {
    name: "accountType",
    required: true
  }, /*#__PURE__*/React.createElement("option", null, "Ordinary"), /*#__PURE__*/React.createElement("option", null, "Trainer")), /*#__PURE__*/React.createElement("label", null, "Email:"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "Email",
    name: "email",
    required: true
  }), /*#__PURE__*/React.createElement("label", null, "Gender:"), /*#__PURE__*/React.createElement("select", {
    name: "gender",
    required: true
  }, /*#__PURE__*/React.createElement("option", null, "Female"), /*#__PURE__*/React.createElement("option", null, "Male")), /*#__PURE__*/React.createElement("label", null, "Contact Number:"), /*#__PURE__*/React.createElement("input", {
    type: "tel",
    placeholder: "Contact",
    name: "contact",
    required: true
  }), /*#__PURE__*/React.createElement("label", null, "Username:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Username",
    name: "username",
    id: "usrname",
    required: true,
    onBlur: onBlur
  }), /*#__PURE__*/React.createElement("label", null, "Address:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Address",
    name: "address"
  }), /*#__PURE__*/React.createElement("label", null, "DOB:"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    placeholder: "DOB",
    name: "dob"
  }), /*#__PURE__*/React.createElement("label", null, "Password:"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    placeholder: "********",
    name: "password",
    required: true
  }), /*#__PURE__*/React.createElement("button", {
    className: "loginButton",
    onSubmit: handleSubmit
  }, "Register")), /*#__PURE__*/React.createElement("a", {
    href: "/#/login"
  }, /*#__PURE__*/React.createElement("button", {
    className: "login-register-link-btn"
  }, "Already have an account? Login here.")))));
}