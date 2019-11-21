import React, { useState, useEffect } from "react";

import { Card, Container } from "./style";
import EchartGraphPie from "../Chart/EchartPie";
import EchartGraphBar from "../Chart/EchartBar";


const FetInpe = () => {
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/inpe", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => setWeather(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <Container>
      <Container style={{ flexDirection: "row" }}>
        {weather.map(w => (
          <Card key={w.atualizacao}>
            <b>{w.atualizacao}</b>
            <p>{w.codigo}</p>
            <p>{w.temperatura}</p>
            <p>{w.tempo_desc}</p>
            <p>{w.umidade}</p>
          </Card>
        ))}
      </Container>
      <Container>
          <EchartGraphPie
            series={[
                {
                  name: "Capitais",
                  data: weather.map(w => w.codigo)
                },
                {
                  name: "Temperatura",
                  data: weather.map(w => w.temperatura)
                }
              ]}
              type={"pie"}
              textTile={"Temperatura das Capitais"}
              limit={5}

          />
      <EchartGraphBar />
      </Container>      
    </Container>
  );
};

export default FetInpe;