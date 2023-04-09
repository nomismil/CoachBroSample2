import './App.css';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Trainings from './Trainings.jsx';
import Bookings from './Bookings.jsx';
import Transactions from './Transactions.jsx';
import Settings from './Settings.jsx';
import Login from './Login.jsx';
import Registrations from "./Registrations.jsx";

/*
* HOMEPAGE SECTION
*/
class CoachbroHome extends React.Component {
  constructor() {
    super();
  }
  async login(loginAcc) {
    const query = `query loginMember($loginAcc: InputLogin!) {
      loginMember(loginAcc: $loginAcc)
    }`;
    const response = await fetch('http://localhost:3000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query,
        variables: {
          loginAcc
        }
      })
    });
    const body = await response.text();
    const res = JSON.parse(body);
    if (res.data.loginMember === 'error') {
      alert("Incorrect username / password!");
    } else {
      window.localStorage.setItem("memberID", res.data.loginMember);
      window.location.href = "/#/";
    }
  }
  async register(newMember) {
    const query = `mutation addMember($newMember: InputMember!) {
      addMember(newMember: $newMember){
        id
      }
    }`;
    const response = await fetch('http://localhost:3000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query,
        variables: {
          newMember
        }
      })
    });
    if (response.status === 200) {
      alert("Successfully registered.");
    }
  }
  async checkUsername(username) {
    const query = `query checkUsername($username: String!) {
     checkUsername(username: $username)
    }`;
    const response = await fetch('http://localhost:3000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query,
        variables: {
          username
        }
      })
    });
    const body = await response.text();
    const res = JSON.parse(body);
    return res.data.checkUsername;
  }
  async getTransactions(memberID) {
    const query = `query getTransactions($memberId: String!) {
      getTransactionsByMemberId(userId: $memberId){
        id
        userId
        trainerId
        dateReceived
        cost
        type
      }
    }`;
    const response = await fetch('http://localhost:3000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query,
        variables: {
          memberId: memberID
        }
      })
    });
    const body = await response.text();
    const res = JSON.parse(body);
    return res.data.getTransactionsByMemberId;
  }
  async getTrainingById(trainingID) {
    // TO-DO: Query and Response
  }
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(Redirect, {
      exact: true,
      from: "/",
      to: "/trainings"
    }), /*#__PURE__*/React.createElement(Route, {
      path: "/login"
    }, /*#__PURE__*/React.createElement(Login, {
      login: this.login
    })), /*#__PURE__*/React.createElement(Route, {
      path: "/register"
    }, /*#__PURE__*/React.createElement(Registrations, {
      addMember: this.register,
      checkUsername: this.checkUsername
    })), /*#__PURE__*/React.createElement(Route, {
      path: "/trainings"
    }, /*#__PURE__*/React.createElement(Trainings, null)), /*#__PURE__*/React.createElement(Route, {
      path: "/bookings"
    }, /*#__PURE__*/React.createElement(Bookings, null)), /*#__PURE__*/React.createElement(Route, {
      path: "/transactions"
    }, /*#__PURE__*/React.createElement(Transactions, {
      getTransactions: this.getTransactions
    })), /*#__PURE__*/React.createElement(Route, {
      path: "/settings"
    }, /*#__PURE__*/React.createElement(Settings, null))));
  }
}
const element = /*#__PURE__*/React.createElement(HashRouter, null, /*#__PURE__*/React.createElement(CoachbroHome, null));
ReactDOM.render(element, document.getElementById('contents'));