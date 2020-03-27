import React, { useState, useEffect, Fragment } from "react";

import { Cards, Container, Section } from "./style";
import EchartGraph from "../Chart/EchartLine";
import moment from "moment";

import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faCloud,
  faCloudRain,
  faCloudSun,
  faCloudSunRain,
  faCloudShowers,
  faCloudShowersHeavy,
  faCloudMeatball,
  faCaretDown,
  faCaretUp
} from "@fortawesome/free-solid-svg-icons";

import "moment/locale/pt-br";

import { CircleProgress } from "react-gradient-progress";
import EchartGraphBarHorizontal from "../Chart/EchartBarHorizontal";
import FormLead from "../FormLead";

fontawesome.library.add();

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  color: "red"
};

const FetSomar = () => {
  const [weather, setWeather] = useState({
    data: [],
    observed_period: [],
    forecast_period: []
  });

  const buscaPrevisao = async (cidade, done) => {
    await fetch(`${process.env.REACT_APP_API_URL}/somar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        cidade,
        diasprevisao: "7"
      })
    })
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
        done();
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    buscaPrevisao("CachoeiraPaulista-SP", () => {});
  }, []);

  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 2,
        width: 100
      }}
    />
  );

  useEffect(() => {
    console.log(weather.data);
  }, [weather.data]);

  const icons = {
    CC: <FontAwesomeIcon size={"2x"} icon={faSun} />,
    PN: <FontAwesomeIcon size={"2x"} icon={faCloudSun} />,
    PI: <FontAwesomeIcon size={"2x"} icon={faCloudSunRain} />,
    EN: <FontAwesomeIcon size={"2x"} icon={faCloud} />,
    NC: <FontAwesomeIcon size={"2x"} icon={faCloudRain} />,
    PC: <FontAwesomeIcon size={"2x"} icon={faCloudShowersHeavy} />,
    NB: <FontAwesomeIcon size={"2x"} icon={faCloudMeatball} />,
    CH: <FontAwesomeIcon size={"2x"} icon={faCloudShowersHeavy} />
  };

  return (
    <Container>
      <Section>
        <FormLead onSubmit={buscaPrevisao} />
      </Section>
      <Section style={{ flexDirection: "row" }}>
        {weather.data.map((w) => (
          <Cards key={w.day} BackgroundColor={"#eaeaea"}>
            <b>
              {moment(w.day)
                .locale("pt-br")
                .format("dddd")}
            </b>
            <br />
            <b>{moment(w.day).format("DD/MM/YYYY")}</b>
            <p>{w.city}</p>
            <br />
            <p>{icons[w.metaWeather]}</p>
          </Cards>
        ))}
      </Section>
      <Section style={{ flexDirection: "row" }}>
        {weather.data.map((w) => (
          <Cards
            key={w.day}
            BackgroundColor={"#ffff"}
            style={{ padding: "0 40px 60px" }}
          >
            <b>FORECAST</b>
            <br />
            <p></p>
            <b></b>
            <p>
              <FontAwesomeIcon
                icon={faCaretUp}
                fixedWidth
                color="red"
                size="2x"
              />
              {Math.round(w.temperature_daily_max * 10) / 10} &#8451;
            </p>
            <p>
              <ColoredLine color="#000033" />
            </p>
            <p>
              <FontAwesomeIcon
                icon={faCaretDown}
                fixedWidth
                color="blue"
                size="2x"
              />
              {Math.round(w.temperature_daily_min * 10) / 10} &#8451;
            </p>
            <br />
            <p>
              UR
              <CircleProgress
                percentage={Math.round(w.rel_humidity_daily_avg * 10) / 10}
                width={50}
                fontSize={10}
                strokeWidth={2}
                secondaryColor="#f0f0f0"
              />
            </p>
            <br />
            {/* Trecho relacionado aos dados OBSERVER*/}
            {/*TESTE*/}
            {/* Analisando o que farei com eles*/}
            {/*
            <b>OBSERVER</b>
            <br />
            <b></b>
            <p>
              <FontAwesomeIcon
                icon={faCaretUp}
                fixedWidth
                color="red"
                size="2x"
              />
              {Math.round(w.max_temperature * 10) / 10} &#8451;
            </p>
            <p>
              <ColoredLine color="#000033" />
            </p>
            <p>
              <FontAwesomeIcon
                icon={faCaretDown}
                fixedWidth
                color="blue"
                size="2x"
              />
              {Math.round(w.min_temperature * 10) / 10} &#8451;
            </p>
            <p>
              UR
              <CircleProgress
                percentage={Math.round(w.mean_rel_humidity * 10) / 10}
                width={50}
                fontSize={10}
                strokeWidth={2}
                secondaryColor="#f0f0f0"
              />
            </p>
            */}
          </Cards>
        ))}
      </Section>
      <Section style={{ flexDirection: "column" }}>
        <EchartGraphBarHorizontal
          xAxis={{
            type: "category",
            data: weather.forecast_period.map((w) =>
              moment(w)
                .locale("pt-br")
                .format("dddd")
            ),
            axisPointer: {
              type: "shadow"
            }
          }}
          series={[
            {
              name: "Max temperature",
              type: "bar",
              data: weather.data.map((w) =>
                parseFloat(w.temperature_daily_max)
              ),
              yAxisIndex: 0
            },
            {
              name: "Min temperature",
              type: "bar",
              data: weather.data.map((w) =>
                parseFloat(w.temperature_daily_min)
              ),
              yAxisIndex: 1
            },
            {
              name: "Relative Humidity Daily Average",
              type: "line",
              data: weather.data.map((w) =>
                parseFloat(w.rel_humidity_daily_avg)
              ),
              yAxisIndex: 2
            }
          ]}
          smooth={true}
          title={"Forecast - Visao Geral"}
          limit={5}
        />
        <EchartGraph
          xAxis={{
            type: "category",
            data: weather.forecast_period.map((w) =>
              moment(w)
                .locale("pt-br")
                .format("dddd")
            )
          }}
          series={[
            {
              name: "Forecast Max temperature",
              data: weather.data.map((w) => w.temperature_daily_max),
              lineStyle: {
                normal: {
                  type: "dashed",
                  width: 1
                }
              }
            },
            {
              name: "Forecast Min temperature",
              data: weather.data.map((w) => w.temperature_daily_min)
            }
          ]}
          smooth={true}
          type={"line"}
          title={"Max and Min Temperature Forecast"}
          limit={5}
        />
        <EchartGraph
          xAxis={{
            type: "category",
            data: weather.observed_period.map((w) =>
              moment(w)
                .locale("pt-br")
                .format("dddd")
            )
          }}
          series={[
            {
              name: "Max temperature",
              data: weather.data.map((w) => w.max_temperature)
            },
            {
              name: "Min temperature",
              data: weather.data.map((w) => w.min_temperature)
            }
          ]}
          smooth={true}
          type={"line"}
          title={"Max and Min Temperature Observer"}
          limit={5}
        />
        <EchartGraph
          xAxis={{
            type: "category",
            data: weather.observed_period.map((w) =>
              moment(w)
                .locale("pt-br")
                .format("dddd")
            )
          }}
          series={[
            {
              name: "Relativy Humidity daily average Observer",
              data: weather.data.map((w) => w.mean_rel_humidity)
            }
          ]}
          title={"Relativy Humidity daily average Observer"}
          smooth={true}
          limit={10}
        />
        <EchartGraph
          xAxis={{
            type: "category",
            data: weather.forecast_period.map((w) =>
              moment(w)
                .locale("pt-br")
                .format("dddd")
            )
          }}
          series={[
            {
              name: "Relativy Humidity daily average Forecast",
              data: weather.data.map((w) => w.rel_humidity_daily_avg)
            }
          ]}
          title={"Relativy Humidity daily average Forecast"}
          smooth={true}
          limit={10}
        />
        <EchartGraph
          xAxis={{
            type: "category",
            data: weather.forecast_period.map((w) =>
              moment(w)
                .locale("pt-br")
                .format("dddd")
            )
          }}
          series={[
            {
              name: "Precipitation Daily acu",
              data: weather.data.map((w) => w.precipitation_daily_acu),
              lineStyle: {
                normal: {
                  type: "dashed",
                  width: 1
                }
              }
            },
            {
              name: "Precipitation Daily max",
              data: weather.data.map((w) => w.precipitation_daily_max)
            },
            {
              name: "Precipitation Daily min",
              data: weather.data.map((w) => w.precipitation_daily_min)
            }
          ]}
          smooth={true}
          type={"line"}
          title={"Precipitation"}
          limit={5}
        />
      </Section>
      <Section style={styles}>
        <Fragment>
          <FontAwesomeIcon className="align-middle redFont" icon="caret-up" />
        </Fragment>
      </Section>
    </Container>
  );
};

export default FetSomar;
