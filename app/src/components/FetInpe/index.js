import React, { useState, useEffect } from "react";

import { Card, Container, Section } from "./style";
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

  const List = [
    { cidade: "Santa Maria", uf: "SE" },
    { cidade: "Val-de-Cans", uf: "PA" },
    { cidade: "Pampulha", uf: "MG" },
    { cidade: "Boa Vista", uf: "RR" },
    { cidade: "Juscelino Kubitschek", uf: "DF" },
    { cidade: "Internacional", uf: "MS" },
    { cidade: "Marechal Rondon", uf: "MT" },
    { cidade: "Afonso Pena", uf: "PR" },
    { cidade: "Hercílio Luz", uf: "SC" },
    { cidade: "Pinto Martins", uf: "CE" },
    { cidade: "Santa Genoveva", uf: "GO" },
    { cidade: "Pres. Castro Pinto", uf: "PB" },
    { cidade: "Internacional", uf: "AP" },
    { cidade: "Zumbi dos Palmares", uf: "AL" },
    { cidade: "Ponta Pelada", uf: "AM" },
    { cidade: "Augusto Severo", uf: "RN" },
    { cidade: "Palmas", uf: "TO" },
    { cidade: "Salgado Filho", uf: "RS" },
    { cidade: "Gov. Jorge Teixeira de Oliveira", uf: "RO" },
    { cidade: "Guararapes", uf: "PE" },
    { cidade: "Presidente Médici", uf: "AC" },
    { cidade: "Galeão", uf: "RJ" },
    { cidade: "Dep. Luís Eduardo Magalhães", uf: "BA" },
    { cidade: "Vitória da Conquista", uf: "BA" },
    { cidade: "Mar. Cunha Machado", uf: "MA" },
    { cidade: "Congonhas", uf: "SP" },
    { cidade: "Sen. Petrônio Portella", uf: "PI" },
    { cidade: "Eurico Aguiar Salles", uf: "ES" }
  ];

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
        {weather.map(w => (
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
                .map(w => {
                  return { name: w.codigo, value: w.temperatura };
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
          textTile={"Estações de Superfície dos Aeroportos"}
          subtextTile={"Temperatura das Capitais"}
          limit={5}
        />
        <EchartGraphBar
          source={[
            ["Temperatura", "Capital"],
            ...weather
              .sort((a, b) => a.temperatura - b.temperatura)
              .map(w => [w.temperatura, w.codigo])
          ]}
        />
      </Section>
    </Container>
  );
};

export default FetInpe;
