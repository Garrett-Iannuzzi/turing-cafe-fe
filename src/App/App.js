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

  handleAddPost = (reservation) => {
   const post = { 
      method: 'POST',
      body: JSON.stringify({
        id: reservation.id,
        name: reservation.name,
        date: reservation.date,
        time: reservation.time,
        number: reservation.number
      }),
      headers: {
        'Content-Type': 'application/json'  
      }
    }
    return fetch('http://localhost:3001/api/v1/reservations', post)
    .then(response => {
      if(!response.ok) {
        throw Error('Error posting')
      }
      return response.json()})
  }

  handleAddReservation = (newRes) => {
    this.setState({ reservations: [...this.state.reservations, newRes] })
    this.handleAddPost(newRes)
  }

  render() {
    return (
      <main className='app'>
        <h1 className='app-title'>Turing Cafe!</h1>
        <Form
          handleAddPost={this.handleAddPost}
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
