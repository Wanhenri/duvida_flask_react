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
          show: true,
          orient: "vertical",
          left: "left",
          data: [{ name: "Forecast" }, { name: "Observer" }]
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "Forecast",
            data: [1, 2, 3, 4, 5, 6, 7],
            type: "line",
            smooth: this.props.smooth || false,
            lineStyle: { color: "blue" }
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
    if (this.props.series !== prevProps.series) {
      const newOptions = Object.assign(this.state.graphOption, {
        title: [{ text: this.props.textTile, x: "center" }],
        series: this.props.series.map(s => {
          return {
            name: s.name,
            data: s.data,
            type: "line",
            smooth: this.props.smooth || false
          };
        }),
        legend: {
          data: this.props.series.map(s => s.name)
        },
        yAxis: {
          min:
            Math.ceil(
              Math.min.apply(
                Math,
                this.props.series.reduce((a, b) => a.concat(b.data), [])
              ) / this.props.limit
            ) *
              this.props.limit -
            this.props.limit,
          max:
            Math.ceil(
              Math.max.apply(
                Math,
                this.props.series.reduce((a, b) => a.concat(b.data), [])
              ) / this.props.limit
            ) *
              this.props.limit +
            this.props.limit
        }
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
            style={{ height: "50vh", width: "80vw", margin: "auto" }}
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
