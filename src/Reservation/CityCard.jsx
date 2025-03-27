import React from 'react'
import { Link } from 'react-router-dom'


const CityCard = ({city,price}) => {
  return (
    <div className='col-md-4'>
        <div className='card'>
            <img src="https://via.placeholder.com/300" className='card-img-top' alt={city}/>
            <div className='card-body'>
                <h5 className='card-title'>{city}</h5>
                <p className='card-text'>Decouvrez cette magnifique ville!</p>
                <p><strong>Prix:{price}$</strong></p>
                <Link to={`/payment?city=city price=${price}`} className='btn btn-success'>Reserver un Ticket</Link>
            </div>
        </div>
    </div>
  );
};
export default CityCard;
