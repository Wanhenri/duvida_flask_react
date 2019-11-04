import React from "react";

import FetSomar from "../FetSomar";

import { Card, Container } from "./styles";

const HeaderDays = () => {
    return (
        <Container>
            {weather.map(w => (
              <Card key={w.day}>
                <b>{w.day}</b>
                <p>{w.city}</p><br />
                <b>FORECAST</b><br />
                <b>Temperatura Max e Min</b>
                <p>{w.temperature_daily_max}</p>
                <p>{w.temperature_daily_min}</p>
                <p>{w.rel_humidity_daily_avg}</p><br />
                <b>OBSERVER</b><br />
                <b>Temperatura Max e Min Observer</b>
                <p>{w.max_temperature}</p>
                <p>{w.min_temperature}</p>
                <p>{w.mean_rel_humidity}</p>
              </Card>
            ))}
        </Container>
    )
};

export default HeaderDays;