import React, { useState } from 'react';
import './App.css'; 
import CountryForm from './CountryForm';
import CountryInfo from './CountryInfo';



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
}

export default App;
