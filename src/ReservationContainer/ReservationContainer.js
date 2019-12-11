import React from 'react';
import ReservationCard from '../ReservationCard/ReservationCard'
import './ReservationContainer.css';

const ReservationContainer = ({ reservations }) => {
  const reservationCards = reservations.map(reservation => {
    return(
        <ReservationCard 
          id={reservation.id}
          name={reservation.name}
          date={reservation.date}
          time={reservation.time}
          number={reservation.number}
        />
    )
  })

  return(
    <section>
      {reservationCards}
    </section>
  )
}

export default ReservationContainer;