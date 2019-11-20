import React, { Component } from "react";
import { Wrapper, Section } from "./styles";

import ReactEcharts from "echarts-for-react";

class EchartGraph extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      graphOption: {
        title: {
          text: "JS Front End Frameworks",
          x: "center"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["Forecast", "Observer"]
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value",
          min: 18,
          max: 30
        },
        series: [
          {
            name:"Series 1",
            data: [1, 2, 3, 4, 5, 6, 7],
            type: "line",
            smooth:true,
            lineStyle: {color: 'blue'}
          }
        ]
      }
    };
  }

  componentDidMount() {
    this.echartsInstance = this.echartsReactRef.getEchartsInstance();
    this.zr = this.echartsInstance.getZr();

    this.zr.on("click", this.onChartClick);
  }

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      const newOptions = Object.assign(this.state.graphOption, {
        title: [{text: this.props.textTile, x: "center"}],
        series: [{ type: "line", data: this.props.data }]
      });
      this.echartsReactRef.getEchartsInstance().setOption(newOptions);
    }
  }

  onChartClick = (...rest) => {
    console.log("App:onClickChart", rest);
  };

  render() {
    return (
      <Wrapper>
        <Section>
          <ReactEcharts
            style={{ height: "50vh", width: "100vw" }}
            ref={e => {
              this.echartsReactRef = e;
            }}
            option={this.state.graphOption}
          />
        </Section>
      </Wrapper>
    );
  }
}

export default EchartGraph;
