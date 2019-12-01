import React, { useState, useEffect, Fragment } from "react";

import { Cards, Container } from "./style";
import EchartGraph from "../Chart/EchartLine";
import moment from 'moment';

import fontawesome from '@fortawesome/fontawesome'
import  { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'

import 'moment/locale/pt-br';
import HeaderDays from "../HeaderDay";

import { CircleProgress } from 'react-gradient-progress';

fontawesome.library.add();

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  color: "red"
};

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

  const ColoredLine = ({color}) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 2,
        width: 100
      }}
    />
  );

  return (
 
    <Container>
      <Container style={{ flexDirection: "row" }}>
        {weather.map( w => (
          <Cards key={w.day} BackgroundColor={ '#eaeaea'}>
            <b>{moment(w.day).locale('pt-br').format('dddd')}</b>
            <br />
            <b>{moment(w.day).format('DD/MM/YYYY')}</b>
            <p>{w.city}</p>
          </Cards>
          ))}
      </Container>
      <Container style={{ flexDirection: "row" }}>
        {weather.map(w => (
          <Cards key={w.day} BackgroundColor={'#ffff'}>
            <b>FORECAST</b>
            <br />
            <p></p>
            <b></b>
            <p><FontAwesomeIcon icon="caret-up" fixedWidth color="red" size="2x"/>{(Math.round(w.temperature_daily_max * 10) / 10 )} &#8451;</p>
            <p><ColoredLine color="#000033" /></p>
            <p><FontAwesomeIcon icon="caret-down" fixedWidth color="blue" size="2x"/>{(Math.round(w.temperature_daily_min * 10) / 10 )} &#8451;</p>
            <br />
            <p>UR<CircleProgress percentage={(Math.round(w.rel_humidity_daily_avg * 10) / 10 ) } width={50} fontSize={10} strokeWidth={2} secondaryColor="#f0f0f0"/></p>
            <br />
            <b>OBSERVER</b>
            <br />
            <b></b>
            <p><FontAwesomeIcon icon="caret-up" fixedWidth color="red" size="2x"/>{(Math.round(w.max_temperature * 10) / 10 ) } &#8451;</p>
            <p><ColoredLine color="#000033" /></p>
            <p><FontAwesomeIcon icon="caret-down" fixedWidth color="blue"  size="2x"/>{(Math.round(w.min_temperature * 10) / 10 )} &#8451;</p>
            <p>UR<CircleProgress percentage={(Math.round(w.mean_rel_humidity * 10) / 10 )} width={50} fontSize={10} strokeWidth={2} secondaryColor="#f0f0f0"/></p>
          </Cards>
        ))}
      </Container>
      <Container>
        <div>
          <h1>TESTE <FontAwesomeIcon className="align-middle redFont" icon="caret-up" /> </h1>
        </div>
        

        <EchartGraph
          xAxis={{
            type: "category",
            data: weather.map(w => moment(w.day).locale('pt-br').format('dddd'))
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
          xAxis={{
            type: "category",
            data: weather.map(w => moment(w.day).locale('pt-br').format('dddd'))
          }}
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
          xAxis={{
            type: "category",
            data: weather.map(w => moment(w.day).locale('pt-br').format('dddd'))
          }}
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
      <Container>
        <Fragment style={styles}>
          <FontAwesomeIcon className="align-middle redFont" icon="caret-up" />        
         </Fragment>
      </Container>

    </Container>
    
  );
};

export default FetSomar;
