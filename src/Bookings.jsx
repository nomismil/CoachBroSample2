import Navbar from './Navbar.jsx';

class Bookings extends React.Component {
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
          <h3>Your Bookings</h3>
        </div>
      </>
    )
  }
}

export default Bookings;
