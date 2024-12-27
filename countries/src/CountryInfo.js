import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

function CountryInfo({ data }) {
  return (
    <Card className="mt-4 shadow-sm">
      <Card.Body>
        <Row>
          <Col md={4} className="text-center">
            <img
              src={data.flags.png}
              alt={`Drapeau de ${data.name.common}`}
              style={{ width: '100%', maxWidth: '250px', borderRadius: '10px' }}
            />
          </Col>
          <Col md={8}>
            <Card.Title className="mb-4">
              <a
                href={`https://www.google.com/maps/search/${data.name.common}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-danger text-decoration-none"
              >
                {data.name.common}
              </a>
            </Card.Title>
            <Card.Text>
              <strong>Capitale :</strong> {data.capital ? data.capital[0] : 'N/A'}
            </Card.Text>
            <Card.Text>
              <strong>Population :</strong> {data.population.toLocaleString()}
            </Card.Text>
            <Card.Text>
              <strong>Région :</strong> {data.region}
            </Card.Text>
            <Card.Text>
              <strong>Langue principale :</strong> {Object.values(data.languages)[0]}
            </Card.Text>
            <Card.Text>
              <strong>Superficie :</strong> {data.area.toLocaleString()} km²
            </Card.Text>
            <Button
              variant="outline-primary"
              href={`https://www.google.com/maps/search/${data.name.common}`}
              target="_blank"
            >
              Voir sur Google Maps
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default CountryInfo;
