import React, { useEffect, useState } from "react";

import EChartLine from "../../Chart/EchartLine";
import moment from "moment";

export default function(props) {
  const [wrfForecast, setWrfForecast] = useState([]);
  const getWRF = () => {
    fetch(`${process.env.REACT_APP_API_URL}/inpe_wrf_ams05km`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        codigoDaLocalidade: 220
      })
    })
      .then((res) => res.json())
      .then((data) => setWrfForecast(transformDate(data.datasets[0].data)));
  };

  function transformDate(list) {
    return list.map((item) => {
      const date = new Date(item.date);
      date.setSeconds(date.getSeconds() + 1000 * item["fcst"]);
      item.date = date;
      return item;
    });
  }

  useEffect(() => {
    getWRF();
  }, []);

  useEffect(() => {
    console.log(wrfForecast);
  }, [wrfForecast]);

  return (
    <EChartLine
      title="WRF - Temperatura"
      xAxis={{
        type: "category",
        data: wrfForecast.map((f) => moment(f.date).format("HH:mm"))
      }}
      smooth={true}
      limit={0.5}
      series={[
        {
          name: "Forecast",
          data: wrfForecast.map((f) => f.temp),
          type: "line",
          axisLabel: {
            formatter: "{value} º"
          },
          lineStyle: { color: "blue" }
        }
      ]}
    ></EChartLine>
  );
}
