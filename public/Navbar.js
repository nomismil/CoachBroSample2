/*
* NAVBAR SECTION
*/
const NavbarMapping = [{
  title: "Trainings",
  icon: /*#__PURE__*/React.createElement("img", {
    src: "./Assets/trainings.png",
    width: 25,
    height: 25,
    alt: ""
  }),
  link: "/#/trainings"
}, {
  title: "Bookings",
  icon: /*#__PURE__*/React.createElement("img", {
    src: "./Assets/bookings.png",
    width: 25,
    height: 25,
    alt: ""
  }),
  link: "/#/bookings"
}, {
  title: "Transactions",
  icon: /*#__PURE__*/React.createElement("img", {
    src: "./Assets/transactions.png",
    width: 25,
    height: 25,
    alt: ""
  }),
  link: "/#/transactions"
}, {
  title: "Settings",
  icon: /*#__PURE__*/React.createElement("img", {
    src: "./Assets/settings.png",
    width: 25,
    height: 25,
    alt: ""
  }),
  link: "/#/settings"
}];
class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      memberID: ""
    };
  }
  componentDidMount() {
    this.setState({
      memberID: window.localStorage.getItem("memberID")
    });
  }
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("nav", {
      id: "navbar"
    }, /*#__PURE__*/React.createElement("ul", {
      id: "navbarList"
    }, /*#__PURE__*/React.createElement("img", {
      src: "./Assets/coachbroLogo.png",
      width: 200,
      height: 200,
      alt: ""
    }), NavbarMapping.map((val, key) => {
      return /*#__PURE__*/React.createElement("li", {
        key: key,
        id: "navbarRow",
        onClick: () => {
          window.location.href = val.link;
        }
      }, /*#__PURE__*/React.createElement("div", {
        id: "icon"
      }, val.icon), /*#__PURE__*/React.createElement("div", {
        id: "title"
      }, val.title));
    }))), this.state.memberID === "" ? /*#__PURE__*/React.createElement("div", {
      className: "toprightSignIn"
    }, /*#__PURE__*/React.createElement("button", {
      className: "log",
      onClick: () => {
        window.location.href = "/#/login";
      }
    }, "Log in"), /*#__PURE__*/React.createElement("button", {
      className: "reg",
      onClick: () => {
        window.location.href = "/#/register";
      }
    }, "Sign up")) : /*#__PURE__*/React.createElement("div", {
      className: "toprightSignOut"
    }, /*#__PURE__*/React.createElement("p", null, "memberID: ", this.state.memberID), /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        window.localStorage.setItem("memberID", "");
        window.location.href = "/#/login";
      }
    }, "Logout")));
  }
}
export default Navbar;