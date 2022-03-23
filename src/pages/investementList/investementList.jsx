import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { DeleteOutline } from "@material-ui/icons";


const Investement = props => (
  <tr>
    <td>{props.Investement.idProject}</td>
    <td>{props.Investement.idInvestisseur}</td>
    <td>{props.Investement.monatantTotal}</td>
    <td>{props.Investement.montantInvesti}</td>
    <td>{new Date(props.Investement.dateInvestissement).toLocaleDateString()}</td>
    <td>{new Date(props.Investement.dateFin).toLocaleDateString()}</td>
    <td>{props.Investement.MethodeInvestissement}</td>
 
    <td>
    <DeleteOutline href="#" onClick={() => { props.deleteInvestement(props.Investement._id) }}>delete</DeleteOutline>
    </td>
  </tr>
)
//const [toRender,err,reload] = useApi('investors/investorId/'+Investement.idInvestisseur);

export default class InvestementList extends Component {
    
  constructor(props) {
    super(props);

    this.deleteInvestement = this.deleteInvestement.bind(this)

    this.state = {investements : []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/investement')
      .then(response => {
        this.setState({ investements: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteInvestement(id) {
    axios.delete('http://localhost:5000/api/investement/deleteInvestment/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
        investements: this.state.investements.filter(el => el._id !== id)
    })
  }

  investementsList() {
    return this.state.investements.map(currentInvestement => {
      return <Investement Investement={currentInvestement} deleteInvestement={this.deleteInvestement} key={currentInvestement._id}/>;
    })
  }



 



  render() {
    return (
      <div>
        <h3>List of Investement</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
        <th>idProject</th>
        <th>idInvestisseur</th>
        <th>Monatant Total</th>
        <th>Amount Invested </th>
        <th>Date Investissement</th>
        <th>Investement Methode</th>
        <th>Delete</th>

            </tr>
          </thead>
          <tbody>
            { this.investementsList() }
          </tbody>
        </table>
      </div>
    )
  }
}