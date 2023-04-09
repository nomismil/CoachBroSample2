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
    }`

    const response = await fetch('http://localhost:3000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables: { loginAcc } })
    });

    const body = await response.text();
    const res = JSON.parse(body);
    if (res.data.loginMember === 'error') {
      alert("Incorrect username / password!")
    }
    else {
      window.localStorage.setItem("memberID", res.data.loginMember);
      window.location.href="/#/";
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
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables: { newMember } })
    });

    if (response.status === 200){
      alert("Successfully registered.")
    }
  }

  async checkUsername(username) {
    const query = `query checkUsername($username: String!) {
     checkUsername(username: $username)
    }`

    const response = await fetch('http://localhost:3000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables: { username } })
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
    }`

    const response = await fetch('http://localhost:3000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables: { memberId:memberID } })
    });

    const body = await response.text();
    const res = JSON.parse(body);
    return res.data.getTransactionsByMemberId;
  }

  async getTrainingById(trainingID) {
    // TO-DO: Query and Response
    
  }

  render() {
    return (
      <>
      <Switch>

        <Redirect exact from="/" to="/trainings" />

        <Route path="/login">
          <Login login={this.login}/>
        </Route>

        <Route path="/register">
          <Registrations addMember={this.register} checkUsername={this.checkUsername}/>
        </Route>

        <Route path="/trainings">
          <Trainings />
        </Route>

        <Route path="/bookings">
          <Bookings />
        </Route>

        <Route path="/transactions">
            <Transactions
              getTransactions={this.getTransactions}
            />
          </Route>

        <Route path="/settings">
          <Settings />
        </Route>

      </Switch>
      </>
    );
  }
}

const element = (<HashRouter><CoachbroHome /></HashRouter>);

ReactDOM.render(element, document.getElementById('contents'));
