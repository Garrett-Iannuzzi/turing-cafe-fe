import React, { Component } from 'react';
import ReservationContainer from '../ReservationContainer/ReservationContainer.js';
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

  render() {
    return (
      <main className='app'>
        <h1 className='app-title'>Turing Cafe!</h1>
        <ReservationContainer
         reservations={this.state.reservations}
        />
      </main>
    )
  }
}

export default App;
