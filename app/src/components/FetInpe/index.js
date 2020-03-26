import React, { useState, useEffect } from "react";

import { Card, Container, Section } from "./style";
import EchartGraphPie from "../Chart/EchartPie";
import EchartGraphBar from "../Chart/EchartBar";

const FetInpe = () => {
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/inpe`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((error) => console.log(error));
  }, []);

  const cityNames = {
    SBAR: { cidade: "Santa Maria", uf: "SE" },
    SBBE: { cidade: "Val-de-Cans", uf: "PA" },
    SBBH: { cidade: "Pampulha", uf: "MG" },
    SBBV: { cidade: "Boa Vista", uf: "RR" },
    SBBR: { cidade: "Juscelino Kubitschek", uf: "DF" },
    SBCG: { cidade: "Internacional", uf: "MS" },
    SBCY: { cidade: "Marechal Rondon", uf: "MT" },
    SBCT: { cidade: "Afonso Pena", uf: "PR" },
    SBFL: { cidade: "Hercílio Luz", uf: "SC" },
    SBFZ: { cidade: "Pinto Martins", uf: "CE" },
    SBGO: { cidade: "Santa Genoveva", uf: "GO" },
    SBJP: { cidade: "Pres. Castro Pinto", uf: "PB" },
    SBMQ: { cidade: "Internacional", uf: "AP" },
    SBMO: { cidade: "Zumbi dos Palmares", uf: "AL" },
    SBMN: { cidade: "Ponta Pelada", uf: "AM" },
    SBNT: { cidade: "Augusto Severo", uf: "RN" },
    SBPJ: { cidade: "Palmas", uf: "TO" },
    SBPA: { cidade: "Salgado Filho", uf: "RS" },
    SBPV: { cidade: "Gov. Jorge Teixeira de Oliveira", uf: "RO" },
    SBRF: { cidade: "Guararapes", uf: "PE" },
    SBRB: { cidade: "Presidente Médici", uf: "AC" },
    SBGL: { cidade: "Galeão", uf: "RJ" },
    SBSV: { cidade: "Dep. Luís Eduardo Magalhães", uf: "BA" },
    SBSL: { cidade: "Vitória da Conquista", uf: "BA" },
    SBSP: { cidade: "Mar. Cunha Machado", uf: "MA" },
    SBTE: { cidade: "Congonhas", uf: "SP" },
    SBVT: { cidade: "Sen. Petrônio Portella", uf: "PI" }
  };
  //

  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 2
      }}
    />
  );

  return (
    <Container>
      <Section>
        {weather.map((w) => (
          <Card key={w.codigo}>
            <b>{w.atualizacao}</b>
            <p>{w.codigo}</p>
            <p></p>
            <p>
              <ColoredLine color="red" />
            </p>
            <p>{w.temperatura}</p>
            <p>{w.tempo_desc}</p>
            <p>{w.umidade}</p>
          </Card>
        ))}
      </Section>
      <Section>
        <EchartGraphPie
          series={[
            {
              name: "Temperatura",
              radius: "55%",
              center: ["50%", "50%"],
              data: weather
                .map((w) => {
                  return {
                    name: cityNames[w.codigo].cidade,
                    value: w.temperatura
                  };
                })
                .sort(function(a, b) {
                  return a.value - b.value;
                }),
              label: {
                normal: {
                  textStyle: {
                    color: "red"
                  }
                }
              },
              labelLine: {
                normal: {
                  lineStyle: {
                    color: "red"
                  },
                  smooth: 0.2,
                  length: 10,
                  length2: 20
                }
              },
              itemStyle: {
                normal: {
                  color: "#242424",
                  shadowBlur: 200,
                  shadowColor: "rgba(0, 0, 0, 0.5)"
                }
              },
              animationType: "scale",
              animationEasing: "elasticOut",
              animationDelay: function(idx) {
                return Math.random() * 200;
              }
            }
          ]}
          title={"Estações de Superfície dos Aeroportos"}
          subtitle={"Temperatura das Capitais"}
          limit={5}
        />
        <EchartGraphBar
          source={[
            ["Temperatura", "Capital"],
            ...weather
              .sort((a, b) => a.temperatura - b.temperatura)
              .map((w) => [w.temperatura, cityNames[w.codigo].cidade])
          ]}
        />
      </Section>
    </Container>
  );
};

export default FetInpe;
