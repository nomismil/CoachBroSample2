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
      avgCost: 0,
    };
  }

  calculate(){
    this.setState({totalCost : this.state.transactions.reduce((prev, curr)=>{
      return prev + curr.cost;
    }, 0)});
    let temp = (this.state.transactions.length !== 0) ? this.state.totalCost/this.state.transactions.length : 0;
    this.setState({avgCost: temp});
  }

  componentDidMount(){
    if (window.localStorage.getItem("memberID")){
      this.props.getTransactions(window.localStorage.getItem("memberID")).then((res) => {
        this.setState({ transactions: res });
        this.setState({filterList: res});
        this.calculate();
      })
    }
  }

  search(){
    var input, term, table, tr, td;
    input = document.getElementById("search");
    term = input.value.toUpperCase();
    table = document.getElementById("tbody");
    tr = table.getElementsByTagName("tr");

    for (var i=0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td");
      if (td){
        var temp, txtValue = "";
        for (var x=0; x<td.length; x++){
          temp = td[x].textContent || td[x].innerText;
          txtValue += temp + " ";
        }

        if (txtValue.toUpperCase().indexOf(term) > -1) {
          tr[i].style.display = "";
        } else{
          tr[i].style.display = "none";
        }
      }
    }
  }

  printPDF(){
    window.print();
  }

  render() {
    if (!window.localStorage.getItem("memberID")){
      return <Redirect to="/login" />;
    }
    return (
      <>
        <div>
          <Navbar />
        </div>
        <div
          className="container myTransactions"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h3>Your Transactions</h3>
          <input type="text" id="search" onKeyUp={this.search} placeholder="Search for transactions..."/>
          <Table memberId={window.localStorage.getItem("memberID")} transactions={this.state.transactions} />
          <Summary memberId={window.localStorage.getItem("memberID")}
          totalTrainings={this.state.transactions.length} 
          totalCost={this.state.totalCost} 
          avgCost={this.state.avgCost}/>
          <button onClick={this.printPDF}>Print Transactions</button>
        </div>
      </>
    );
  }
}

const TableHeader = (props) => {
  const str = (props.memberId.slice(0,3) === "MAO") ? "Coach Id" : "Member Id"
  return (
    <thead>
      <tr>
        <th>Training Type</th>
        <th>{str}</th>
        <th>Date</th>
        <th>Cost</th>
      </tr>
    </thead>
  );
}

const TableBody = (props) => {
  if (props.transactions.length){
    var rows = props.transactions.map(item => {
      return (
        <tr key={item.id}>
          <td>{item.type}</td>
          <td>{(props.memberId.slice(0, 3) === "MAO") ? item.trainerId : item.userId}</td>
          <td>{new Date(item.dateReceived).toLocaleDateString()}</td>
          <td>{item.cost}</td>
        </tr>
      )
    })
  } else{
    rows = <></>;
  }
  return (
    <tbody id="tbody">
      {rows}
    </tbody>
  );
}

const Table = (props) => {
  return (
    <table id="table" border={"1px solid black"}>
      <TableHeader memberId={props.memberId}/>
      <TableBody memberId={props.memberId} transactions={props.transactions}/>
    </table>
  )
}

const Summary = (props) => {
  var str1, str2, str3;
  if (props.memberId.slice(0, 3) === "MAO"){
    str1 = "Total Trainings Attended:";
    str2 = "Total Cost:";
    str3 = "Average Cost:";
  } else{
    str1 = "Total Trainings Conducted:";
    str2 = "Total Earnings:";
    str3 = "Average Earnings:";
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h3>{str1}</h3>
        <h3>{props.totalTrainings}</h3>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h3>{str2}</h3>
        <h3>{props.totalCost}</h3>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h3>{str3}</h3>
        <h3>{props.avgCost}</h3>
      </div>
    </div>
  )
}
export default Transactions;
