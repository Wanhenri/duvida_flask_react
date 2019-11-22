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
        <EchartGraph
          xAxis={{
            type: "category",
            data: weather.map(w => w.day)
          }}
          series={[
            {
              name: "Forecast Max temperature",
              data: weather.map(w => w.temperature_daily_max),
              lineStyle: {
                normal: {
                  type: "dashed",
                  width: 1
                }
              }
            },
            {
              name: "Observed Max temperature",
              data: weather.map(w => w.max_temperature)
            }
          ]}
          smooth={true}
          type={"line"}
          textTile={"Max and Min Temperature Forecast"}
          limit={5}
        />
        <EchartGraph
          series={[
            {
              name: "Max temperature",
              data: weather.map(w => w.max_temperature)
            },
            {
              name: "Min temperature",
              data: weather.map(w => w.min_temperature)
            }
          ]}
          smooth={true}
          type={"line"}
          textTile={"Max and Min Temperature Observer"}
          limit={5}
        />
        <EchartGraph
          series={[
            {
              name: "Relativy Humidity daily average Forecast",
              data: weather.map(w => w.rel_humidity_daily_avg)
            },
            {
              name: "Relativy Humidity daily average Observer",
              data: weather.map(w => w.mean_rel_humidity)
            }
          ]}
          textTile={"Relativy Humidity daily average"}
          smooth={true}
          limit={10}
        />
      </Container>
    </Container>
  );
};

export default FetSomar;
