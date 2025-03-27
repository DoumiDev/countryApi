import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Form, Button,   Container, Row, Col, Alert } from 'react-bootstrap';


const PaymentForm = () => {
    const location = useLocation();
    const navigate = useNavigate();

    //Recuperer des parametres d'url(ville et prix)
    const params = new URLSearchParams(location.search);
    const city = params.get("city");
    const price = params.get("price");

    //Etats pour gerer les champs du formulaire
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Paiement effectue pour city! Ticket reserve pour ${price} $`);
        navigate("/");//Rediger vers le page d'acueill apres le paiement
    };

    return(
        <div className='container mt-5'>
            <h1 className='text-center'>Paiement pour votre Ticket</h1>
            <div className='row mt-4'>
                <div className='col-md-6 offset-md-3'>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label htmlFor="name" className='form-label'> Nom complet</label>
                            <input type="text" className='form-control' id='name' value={name} onChange={(e) => setName(e.target.value)} required/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="email" className='form-label'>Email</label>
                            <input type="email" className='form-control' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="cardNumber" className='form-label'>Numero de carte</label>
                            <input type="text" className='form-controle' id='cardNumber' value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="expiryDate" className='form-label'>Date d'expiration</label>
                            <input type="text" className='form-control' id='expiryDate' value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="cvv" className='form-label'>CVV</label> 
                            <input type="text" className='form-controle' id='cvv' value={cvv} onChange={(e) => setCvv(e.target.value)} required/> 
                        </div>
                        <button type='submit' className='btn btn-success w-100'>Payer {price} $</button>
                    </form>
                </div>
            </div>
        </div>
    )
 
};
export default PaymentForm;
