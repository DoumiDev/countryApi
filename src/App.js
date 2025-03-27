import React, { useState } from 'react';
import './App.css'; 
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CountryForm from './CountryForm';
import CountryInfo from './CountryInfo';
import PaymentForm from './Reservation/PaymentForm';
import CityCard from './Reservation/CityCard';



function App() {
  const [countryData, setCountryData] = useState(null);
  const [error, setError] = useState('');

  
  return (
    <div className="container">
      <h1>Informations sur les Pays</h1>
      <CountryForm setCountryData={setCountryData} setError={setError} />
      {error && <h3 className="error" style={{ color: 'red' }}>{error}</h3>}
      {countryData && <CountryInfo data={countryData} />}
    </div>
  );


  
//       return(
//         <Router>
//           <div className='container'>
//             <h1 className='text-center mt-5'>Reservez votre Ticket de Voyage</h1>
//             <Routes>
//             <Route path='/' element={<Home/>}/>
//             <Route path='/payment' element={<PaymentForm/>}/>
//             </Routes>
//           </div>
//         </Router>
//       );
// };

// const Home = () => {
//   return(
//     <div className='row mt-4'>
//       {/*Ville 1*/}
//       <CityCard city='Paris' price='100'/>
//       {/*Ville 2*/}
//       <CityCard city='New York' price='120'/>
//       {/*Ville 3*/}
//       <CityCard city='Tokyo' price='150'/>
//     </div>
//   );
// const list_Voyages = () => {
//   {lists.map((list) => {
    

//   })}
// }
};

export default App;
