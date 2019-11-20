import React, { useState, useEffect } from "react";

import { Card, Container } from "./style";
import EchartGraph from "../Chart/EchartLine";

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
      <Container style={{ flexDirection: "row" }}>
        {weather.map(w => (
          <Card key={w.day}>
            <b>{w.day}</b>
            <p>{w.city}</p>
            <br />
            <b>FORECAST</b>
            <br />
            <b>Temperatura Max e Min</b>
            <p>{w.temperature_daily_max}</p>
            <p>{w.temperature_daily_min}</p>
            <p>{w.rel_humidity_daily_avg}</p>
            <br />
            <b>OBSERVER</b>
            <br />
            <b>Temperatura Max e Min Observer</b>
            <p>{w.max_temperature}</p>
            <p>{w.min_temperature}</p>
            <p>{w.mean_rel_humidity}</p>
          </Card>
        ))}
      </Container>
      <Container>
        <EchartGraph data={weather.map(w => w.max_temperature)} textTile={"Max Temperature"} />
        <EchartGraph data={weather.map(w => w.max_temperature)} textTile={"Max Temperature"} />
        <EchartGraph data={weather.map(w => w.min_temperature)} textTile={"Min Temperature"} />
        <EchartGraph data={weather.map(w => w.rel_humidity_daily_avg)} textTile={"Relativy Humidity daily average"} />
      </Container>
    </Container>
  );
};

export default FetSomar;
