/*
* NAVBAR SECTION
*/
const NavbarMapping = [
  {
    title: "Trainings",
    icon: <img src="./Assets/trainings.png" width={25} height={25} alt="" />,
    link: "/#/trainings",
  },
  {
    title: "Bookings",
    icon: <img src="./Assets/bookings.png" width={25} height={25} alt="" />,
    link: "/#/bookings",
  },
  {
    title: "Transactions",
    icon: <img src="./Assets/transactions.png" width={25} height={25} alt="" />,
    link: "/#/transactions",
  },
  {
    title: "Settings",
    icon: <img src="./Assets/settings.png" width={25} height={25} alt="" />,
    link: "/#/settings",
  }
]

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = { memberID: "" };
  }

  componentDidMount() {
    this.setState({ memberID: window.localStorage.getItem("memberID") });
  }

  render() {
    return (
      <>
        <nav id="navbar">
          <ul id="navbarList">
            <img src="./Assets/coachbroLogo.png" width={200} height={200} alt="" />
            {NavbarMapping.map((val, key) => {
              return (
                <li key={key} id="navbarRow" onClick={() => { window.location.href = val.link }}>
                  <div id="icon">{val.icon}</div>
                  <div id="title">{val.title}</div>
                </li>
              );
            })}
          </ul>
        </nav>

        {
          this.state.memberID === "" ?
          <div className="toprightSignIn">
            <button className="log" onClick={() => { window.location.href = "/#/login" }} >Log in</button>
            <button className="reg" onClick={() => { window.location.href = "/#/register" }} >Sign up</button>
          </div> :
          <div className="toprightSignOut">
            <p>memberID: {this.state.memberID}</p>
            <button onClick={() => {window.localStorage.setItem("memberID", ""); window.location.href = "/#/login";}}>Logout</button>
          </div>
        }
      </>
    )
  }
}

export default Navbar;
