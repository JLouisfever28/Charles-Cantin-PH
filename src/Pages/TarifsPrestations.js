import React from 'react';
import { Card, Container } from 'react-bootstrap';
import "../Styles/tarifs.css";

const TarifsPrestations = () => {
  const data = [
    {
      id: 1,
      title: "Juste moi",
      price: 130,
      features: ["Séance pour une personne", "En Extérieur ou en Studio"],
    },
    {
      id: 2,
      title: "Pour Deux",
      price: 195,
      features: ["Séance pour deux personnes", "En Extérieur ou en Studio"],
    },
    {
      id: 3,
      title: "Famille",
      price: 220,
      features: ["Pour la famille ou les amis jusqu'à 4 personnes", "En Extérieur ou en Studio", "30 euros en supplément par personne au-delà de 4 (hormis enfant jusqu'à 2 ans)"],
    },
    {
      id: 4,
      title: "Il était une fois",
      price: 160,
      features: ["Photo de grossesse (à votre domicile, en extérieur ou en studio)"],
    },
    {
      id: 5,
      title: "Mon Bébé",
      price: 100,
      features: ["Photo d'enfant jusqu'à 3 ans (photo à domicile)"],
    },
    {
      id: 6,
      title: "J'immortalise l'événement",
      features: ["Sur mesure", "Prestation de mariage ou baptême sur devis"],
    },
    
  ];

  return (
    <Container>
      <div className="tarifs-container">
        {data.map((item) => (
          <Card key={item.id}>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                <h2>€{item.price}</h2>
              </Card.Text>
              <Card.Text>
                <ul>
                  {item.features.map((feature) => (
                    <li key={`${item.id}-${feature}`}>{feature}</li>
                  ))}
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default TarifsPrestations;