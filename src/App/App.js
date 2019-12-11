import React, { Component } from 'react';
import ReservationContainer from '../ReservationContainer/ReservationContainer';
import Form from '../Form/Form';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(reservations => this.setState({ reservations }))
  }

  handleAddReservation = (newRes) => {
    this.setState({ reservations: [...this.state.reservations, newRes] })
  }

  render() {
    return (
      <main className='app'>
        <h1 className='app-title'>Turing Cafe!</h1>
        <Form
          handleAddReservation={this.handleAddReservation}
        />
        <ReservationContainer
          reservations={this.state.reservations}
        />
      </main>
    )
  }
}

export default App;
