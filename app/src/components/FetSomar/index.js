import React, { useState, useEffect } from "react";

import { Card, Container } from "./style";

const FetSomar = () => {
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/somar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        cidade: "RiodeJaneiro-RJ",
        diasprevisao: "7"
      })
    })
      .then(response => response.json())
      .then(data => setWeather(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <Container>
      {weather.map(w => (
        <Card key={w.day}>
          <b>{w.day}</b>
          <p>{w.city}</p>
        </Card>
      ))}
    </Container>
  );
};

export default FetSomar;
