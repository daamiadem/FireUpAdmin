import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { DeleteOutline } from "@material-ui/icons";


const Investor = props => (
  <tr>
    <td>{props.Investor.username}</td>
    <td>{props.Investor.firstName}</td>
    <td>{props.Investor.lastName}</td>
    <td>{props.Investor.sexe}</td>
    <td>{props.Investor.datOfBirth}</td>
    <td>{props.Investor.phoneNumber}</td>
    <td>{props.Investor.status}</td>
    <td>{props.Investor.accreditationForm}</td>
    <td>{props.Investor.accountType}</td>
    <td>{props.Investor.centerOfInterest}</td>
 
    <td>
    <DeleteOutline href="#" onClick={() => { props.deleteInvestor(props.Investor._id) }}>delete</DeleteOutline>
    </td>
  </tr>
)

export default class InvestorsList extends Component {
  constructor(props) {
    super(props);

    this.deleteInvestor = this.deleteInvestor.bind(this)

    this.state = {investors: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/investors')
      .then(response => {
        this.setState({ investors: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteInvestor(id) {
    axios.delete('http://localhost:5000/api/investors/deleteInvestor/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      investors: this.state.investors.filter(el => el._id !== id)
    })
  }

  investorsList() {
    return this.state.investors.map(currentInvestor => {
      return <Investor Investor={currentInvestor} deleteInvestor={this.deleteInvestor} key={currentInvestor._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>List of Investors</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
        <th>User name</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Sexe</th>
        <th>Date Of Birth</th>
        <th>Phone Number</th>
        <th>Status</th>
        <th>Accreditation Form</th>
        <th>Account Type</th>
        <th>Center Of Interest</th>
        <th>Delete</th>

            </tr>
          </thead>
          <tbody>
            { this.investorsList() }
          </tbody>
        </table>
      </div>
    )
  }
}