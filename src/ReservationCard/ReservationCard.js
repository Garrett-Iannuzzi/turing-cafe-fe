import React from 'react';
import './ReservationCard.css';

const ReservationCard = ({ id, name, date, time, number }) => {
  return(
    <article>
      <h1 className='article-h1'>Name: {name}</h1>
      <h2 className='article-h2'>Date: {date}</h2>
      <h3 className='article-h3'>Time: {time}</h3>
      <h3 className='article-h4'>Number of guests: {number}</h3>
    </article>
  )
}

export default ReservationCard;