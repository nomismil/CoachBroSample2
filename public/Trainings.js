import Navbar from './Navbar.jsx';
function Card(props) {
  let bg_img = `url(${props.images})`;
  let {
    title,
    cost,
    dollar,
    trainer,
    venue,
    vacancy,
    des,
    exp_date
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "color_bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "card_img",
    style: {
      "backgroundImage": bg_img
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "heart"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "<http://www.w3.org/2000/svg>",
    viewBox: "0 0 64 64"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M47 5c-6.5 0-12.9 4.2-15 10-2.1-5.8-8.5-10-15-10A15 15 0 0 0 2 20c0 13 11 26 30 39 19-13 30-26 30-39A15 15 0 0 0 47 5z"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "cardInfo"
  }, /*#__PURE__*/React.createElement("h1", null, title), /*#__PURE__*/React.createElement("p", null, des, ", by ", trainer), /*#__PURE__*/React.createElement("p", null, exp_date), /*#__PURE__*/React.createElement("p", null, venue), /*#__PURE__*/React.createElement("div", {
    className: "action"
  }, /*#__PURE__*/React.createElement("div", {
    className: "priceGroup"
  }, /*#__PURE__*/React.createElement("p", {
    className: "price"
  }, "Vacancy left: ", vacancy), /*#__PURE__*/React.createElement("p", {
    className: "price"
  }, dollar, cost)), /*#__PURE__*/React.createElement("div", {
    className: "cart"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "outCart",
    xmlns: "<http://www.w3.org/2000/svg>",
    viewBox: "0 0 64 64"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 6h10l10 40h32l8-24H16"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "23",
    cy: "54",
    r: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "49",
    cy: "54",
    r: "4"
  })))))));
}
class Trainings extends React.Component {
  constructor() {
    super();
    this.state = {
      trainings: []
    };
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
    }`;
    const response = await fetch('http://localhost:3000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query
      })
    });
    const body = await response.text();
    const res = JSON.parse(body);
    this.setState({
      trainings: res.data.listTraining
    });
  }
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Navbar, null)), /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "training"
    }, /*#__PURE__*/React.createElement("p", null, "Filter by type:"), /*#__PURE__*/React.createElement("select", null, /*#__PURE__*/React.createElement("option", null))), /*#__PURE__*/React.createElement("div", {
      className: "cardsContainer"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, this.state.trainings.map((val, key) => {
      return /*#__PURE__*/React.createElement(Card, {
        key: key,
        title: val.title,
        trainer: val.trainer,
        images: val.photoURL,
        dollar: "$",
        cost: val.cost,
        venue: val.venue,
        vacancy: val.vacancy,
        des: val.description,
        exp_date: new Date(val.date).toDateString()
      });
    })))));
  }
}
export default Trainings;