import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state ={
      name: '',
      date: '',
      time: '',
      number: 0
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  resetInputs = () => {
    this.setState({ name: '', date: '', time: '', number: 0 })
  }

  submitReservation = (e) => {
    e.preventDefault()
    const newRes = { id: Date.now(), ...this.state }
    this.props.handleAddReservation(newRes)
    this.resetInputs()
  }

  render() {
    return(
      <form>
        <label>Name:</label>
        <input 
          className='input-1'
          name='name'
          value={this.state.name}
          onChange={ (e) => this.handleChange(e) }
        />
        <label>Date:</label>
        <input
          className='input-2'
          name='date'
          value={this.state.date}
          placeholder='mm/dd'
          onChange={ (e) => this.handleChange(e) } 
        />
        <label>Time:</label>
        <input
          className='input-3'          
          name='time'
          value={this.state.time}
          onChange={ (e) => this.handleChange(e) } 
        />
        <label>Number of Guests:</label>
        <input
          className='input-4'
          name='number'
          value={this.state.number}
          onChange={ (e) => this.handleChange(e) } 
        />
        <button className='make-res-btn' onClick={ (e) => this.submitReservation(e) }>Make Res!</button>
      </form>
    )
  }
}

export default Form;