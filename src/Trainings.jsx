import Navbar from './Navbar.jsx';


function Card(props) {
  let bg_img = `url(${props.images})`;
  let { title, cost, dollar, trainer, venue, vacancy, des, exp_date } = props;

  return (
    <div className="card">
      <div className="wrapper">
        <div className="color_bg"></div>
        <div className="card_img" style={{ "backgroundImage": bg_img }}></div>
        <div className="heart">
          <svg xmlns="<http://www.w3.org/2000/svg>" viewBox="0 0 64 64">
            <path d="M47 5c-6.5 0-12.9 4.2-15 10-2.1-5.8-8.5-10-15-10A15 15 0 0 0 2 20c0 13 11 26 30 39 19-13 30-26 30-39A15 15 0 0 0 47 5z">
            </path>
          </svg>
        </div>
        <div className="cardInfo">
          <h1>{title}</h1>
          <p>{des}, by {trainer}</p>
          <p>{exp_date}</p>
          <p>{venue}</p>
          <div className="action">
            <div className="priceGroup">
              <p className="price">Vacancy left: {vacancy}</p>
              <p className="price">{dollar}{cost}</p>
            </div>
            <div className="cart">
              <svg className="outCart" xmlns="<http://www.w3.org/2000/svg>" viewBox="0 0 64 64">
                <path d="M2 6h10l10 40h32l8-24H16"></path>
                <circle cx="23" cy="54" r="4"></circle>
                <circle cx="49" cy="54" r="4"></circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


class Trainings extends React.Component {
  constructor() {
    super();
    this.state = { trainings: [] };
  }

  componentDidMount() {
    this.loadTrainings();
  }

  async loadTrainings() {
    const query = `query listTraining {
      listTraining {
        id
        trainer
        difficulty
        title
        type
        venue
        vacancy
        date
        cost
        description
        photoURL
      }
    }`

    const response = await fetch('http://localhost:3000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query })
    });

    const body = await response.text();
    const res = JSON.parse(body);
    this.setState({ trainings: res.data.listTraining });
  }
  

  render() {
    return (
      <>
        <div>
          <Navbar />
        </div>

        <div className='container'>
          <div className='training'>
            <p>Filter by type:</p>
            <select>
              <option></option>
            </select>
          </div>

          <div className='cardsContainer'>
            <div className="row">
              {this.state.trainings.map((val, key) => {
                return (
                  <Card
                    key={key}
                    title={val.title}
                    trainer={val.trainer}
                    images={val.photoURL}
                    dollar="$"
                    cost={val.cost}
                    venue={val.venue}
                    vacancy={val.vacancy}
                    des={val.description}
                    exp_date={new Date(val.date).toDateString()}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Trainings;
