import Navbar from './Navbar.jsx';

class Settings extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <div>
          <Navbar />
        </div>
        <div className='container'>
          <h3>User Profile Settings</h3>
        </div>
      </>
    )
  }
}

export default Settings;
