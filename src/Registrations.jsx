import Navbar from "./Navbar.jsx";

export default function Registrations(props) {
  let memberExist = false;

  const onBlur = async (e) => {
    // after user enters username, send to backend to check if it exists
    let username = e.target.value
    memberExist = await props.checkUsername(username);
    const inp = document.getElementById("usrname");
    if (memberExist){
      inp.setCustomValidity("Username already exists."); // this will prevent submission of form
    }
    else{
      inp.setCustomValidity("");
    }
  }

  const handleSubmit = async (e) => {
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
        dob: form.dob.value,
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
        dob: member.dob,
      });

      form.reset();
      memberExist = false;
      window.location.href = "/#/login/" // redirect 
    }
  }

  return (
    <>
      {/* <div>
        <Navbar />
      </div> */}
      {/* <div className='container'> */}

      <div className="login">
        <div className="auth-form-container">
          <h3>New Member Registrations</h3>
          {/* <h2 className="auth-form-header">Welcome to CoachBRO!</h2> */}

          <form
            name="register"
            className="login-form"
            onSubmit={handleSubmit}
          >
            <label>First Name:</label>
            <input type="text" placeholder="First Name" name="firstName" required />
            <label>Last Name:</label>
            <input type="text" placeholder="Last Name" name="lastName" required />
            <label>Account Type:</label>
            <select name="accountType" required>
              <option>Ordinary</option>
              <option>Trainer</option>
            </select>
            <label>Email:</label>
            <input type="email" placeholder="Email" name="email" required />
            <label>Gender:</label>
            <select name="gender" required>
              <option>Female</option>
              <option>Male</option>
            </select>
            <label>Contact Number:</label>
            <input type="tel" placeholder="Contact" name="contact" required />
            <label>Username:</label>
            <input type="text" placeholder="Username" name="username" id="usrname" required onBlur={onBlur} />
            <label>Address:</label>
            <input type="text" placeholder="Address" name="address" />
            <label>DOB:</label>
            <input type="date" placeholder="DOB" name="dob" />
            <label>Password:</label>
            <input type="password" placeholder="********" name="password" required />
            <button className="loginButton" onSubmit={handleSubmit}>Register</button>
          </form>

          <a href="/#/login">
            <button className="login-register-link-btn">
              Already have an account? Login here.
            </button>
          </a>
        </div>

        {/* <footer className="privacy-notice">
            <p>
              This site uses cookies. By continuing to use this site, you agree to
              our use of cookies. For more details, please see our{" "}
              <a href="https://www.nus.edu.sg/privacy-notice/">Privacy Policy</a>
            </p>
          </footer> */}
      </div>
      {/* </div> */}
    </>
  );
}

