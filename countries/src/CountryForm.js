import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, ListGroup, InputGroup, Container, Row, Col, Alert } from 'react-bootstrap';

function CountryForm({ setCountryData, setError }) {
  const [country, setCountry] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (!country) {
      setSuggestions([]);
      return;
    }

    const fetchSuggestions = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const filteredSuggestions = response.data.filter(item =>
          item.name.common.toLowerCase().startsWith(country.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
        setError('');
      } catch {
        setSuggestions([]);
        setError('Aucun pays trouvé!');
      }
    };

    fetchSuggestions();
  }, [country]);

  const handleCountryClick = async (countryName) => {
    try {
      const { data } = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
      setCountryData(data[0]);
      setSuggestions([]);
      setCountry('');
    } catch {
      setError('Impossible de récupérer les informations.');
    }
  };

  const handleClear = () => {
    setCountry('');
    setSuggestions([]);
    setCountryData(null);
  };

  return (
    <Container className="my-5 p-4 border rounded shadow-sm bg-light">
      <Row>
        <Col>
          <h2 className="text-center mb-4">Rechercher un Pays</h2>
          <Form>
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                placeholder="Entrer le nom du pays"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
              <Button variant="outline-secondary" onClick={handleClear}>
                Effacer
              </Button>
            </InputGroup>
          </Form>
          {suggestions.length > 0 && (
            <ListGroup className="mt-3">
              {suggestions.map((item) => (
                <ListGroup.Item
                  key={item.name.common}
                  action
                  onClick={() => handleCountryClick(item.name.common)}
                  className="text-primary"
                >
                  {item.name.common}
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
          {setError && <Alert className="mt-3" variant="danger">{setError}</Alert>}
        </Col>
      </Row>
    </Container>
  );
}

export default CountryForm;
