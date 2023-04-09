import React from "react";
import Navbar from "./Navbar.jsx";
import { Redirect } from "react-router-dom";
class Transactions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      filterList: [],
      totalCost: 0,
      avgCost: 0
    };
  }
  calculate() {
    this.setState({
      totalCost: this.state.transactions.reduce((prev, curr) => {
        return prev + curr.cost;
      }, 0)
    });
    let temp = this.state.transactions.length !== 0 ? this.state.totalCost / this.state.transactions.length : 0;
    this.setState({
      avgCost: temp
    });
  }
  componentDidMount() {
    if (window.localStorage.getItem("memberID")) {
      this.props.getTransactions(window.localStorage.getItem("memberID")).then(res => {
        this.setState({
          transactions: res
        });
        this.setState({
          filterList: res
        });
        this.calculate();
      });
    }
  }
  search() {
    var input, term, table, tr, td;
    input = document.getElementById("search");
    term = input.value.toUpperCase();
    table = document.getElementById("tbody");
    tr = table.getElementsByTagName("tr");
    for (var i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td");
      if (td) {
        var temp,
          txtValue = "";
        for (var x = 0; x < td.length; x++) {
          temp = td[x].textContent || td[x].innerText;
          txtValue += temp + " ";
        }
        if (txtValue.toUpperCase().indexOf(term) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  printPDF() {
    window.print();
  }
  render() {
    if (!window.localStorage.getItem("memberID")) {
      return /*#__PURE__*/React.createElement(Redirect, {
        to: "/login"
      });
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Navbar, null)), /*#__PURE__*/React.createElement("div", {
      className: "container myTransactions",
      style: {
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("h3", null, "Your Transactions"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      id: "search",
      onKeyUp: this.search,
      placeholder: "Search for transactions..."
    }), /*#__PURE__*/React.createElement(Table, {
      memberId: window.localStorage.getItem("memberID"),
      transactions: this.state.transactions
    }), /*#__PURE__*/React.createElement(Summary, {
      memberId: window.localStorage.getItem("memberID"),
      totalTrainings: this.state.transactions.length,
      totalCost: this.state.totalCost,
      avgCost: this.state.avgCost
    }), /*#__PURE__*/React.createElement("button", {
      onClick: this.printPDF,
      wrap: true
    }, "Print Transactions")));
  }
}
const TableHeader = props => {
  const str = props.memberId.slice(0, 3) === "MAO" ? "Coach Id" : "Member Id";
  return /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Training Type"), /*#__PURE__*/React.createElement("th", null, str), /*#__PURE__*/React.createElement("th", null, "Date"), /*#__PURE__*/React.createElement("th", null, "Cost")));
};
const TableBody = props => {
  if (props.transactions.length) {
    var rows = props.transactions.map(item => {
      return /*#__PURE__*/React.createElement("tr", {
        key: item.id
      }, /*#__PURE__*/React.createElement("td", null, item.type), /*#__PURE__*/React.createElement("td", null, props.memberId.slice(0, 3) === "MAO" ? item.trainerId : item.userId), /*#__PURE__*/React.createElement("td", null, new Date(item.dateReceived).toLocaleDateString()), /*#__PURE__*/React.createElement("td", null, item.cost));
    });
  } else {
    rows = /*#__PURE__*/React.createElement(React.Fragment, null);
  }
  return /*#__PURE__*/React.createElement("tbody", {
    id: "tbody"
  }, rows);
};
const Table = props => {
  return /*#__PURE__*/React.createElement("table", {
    id: "table",
    border: "1px solid black"
  }, /*#__PURE__*/React.createElement(TableHeader, {
    memberId: props.memberId
  }), /*#__PURE__*/React.createElement(TableBody, {
    memberId: props.memberId,
    transactions: props.transactions
  }));
};
const Summary = props => {
  var str1, str2, str3;
  if (props.memberId.slice(0, 3) === "MAO") {
    str1 = "Total Trainings Attended:";
    str2 = "Total Cost:";
    str3 = "Average Cost:";
  } else {
    str1 = "Total Trainings Conducted:";
    str2 = "Total Earnings:";
    str3 = "Average Earnings:";
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("h3", null, str1), /*#__PURE__*/React.createElement("h3", null, props.totalTrainings)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("h3", null, str2), /*#__PURE__*/React.createElement("h3", null, props.totalCost)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("h3", null, str3), /*#__PURE__*/React.createElement("h3", null, props.avgCost)));
};
export default Transactions;