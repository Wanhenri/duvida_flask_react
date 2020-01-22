import React, { Component } from "react";
import { Wrapper, Section } from "./styles";

import ReactEcharts from "echarts-for-react";

class EchartGraphBarHorizontal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      graphOption: {
        title: {
          text: "JS Front End Frameworks",
          x: "center"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999"
            }
          }
        },
        legend: {
          show: true,
          orient: "horizontal",
          left: "left",
          padding: 30,
          data: ["蒸发量", "降水量", "平均温度", "平均温度"]
        },
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ],
            axisPointer: {
              type: "shadow"
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "Max Temperature",
            min: 0,
            max: 250,
            interval: 5,
            axisLabel: {
              formatter: "{value} %"
            }
          },
          {
            type: "value",
            name: "Min Temperature",
            min: 0,
            max: 25,
            position: "right",
            axisLine: {
              lineStyle: {
                color: "blue"
              }
            },
            interval: 5,
            axisLabel: {
              formatter: "{value} °C"
            }
          },
          {
            type: "value",
            name: "",
            min: 0,
            max: 25,
            position: "left",
            interval: 5,
            axisLabel: {
              formatter: "{value}mm"
            }
          }
        ],
        series: [
          {
            name: "蒸发量",
            type: "bar",
            data: [
              2.0,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3
            ]
          },
          {
            name: "降水量",
            type: "bar",
            data: [
              2.6,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3
            ]
          },
          {
            name: "平均温度",
            type: "line",
            yAxisIndex: 2,
            data: [
              2.0,
              2.2,
              3.3,
              4.5,
              6.3,
              10.2,
              20.3,
              23.4,
              23.0,
              16.5,
              12.0,
              6.2
            ]
          }
        ]
      }
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.series !== prevProps.series) {
      const newOptions = Object.assign(this.state.graphOption, {
        title: [{ text: this.props.textTile, x: "center" }],
        series: this.props.series.map(s => {
          return Object.assign(s, {
            smooth: this.props.smooth || false
          });
        }),
        legend: {
          data: this.props.series.map(s => s.name)
        },
        xAxis: this.props.xAxis,
        yAxis: [
          {
            type: "value",
            name: "Max",
            min:
              Math.ceil(
                Math.min.apply(Math, this.props.series[0].data) /
                  this.props.limit
              ) *
                this.props.limit -
              this.props.limit,
            max:
              Math.ceil(
                Math.max.apply(Math, this.props.series[0].data) /
                  this.props.limit
              ) *
                this.props.limit +
              this.props.limit,
            interval: 5,
            position: "right",
            offset: 50,
            axisLabel: {
              formatter: "{value} °C"
            }
          },
          {
            type: "value",
            name: "Min",
            min:
              Math.ceil(
                Math.min.apply(Math, this.props.series[1].data) /
                  this.props.limit
              ) *
                this.props.limit -
              this.props.limit,
            max:
              Math.ceil(
                Math.max.apply(Math, this.props.series[1].data) /
                  this.props.limit
              ) *
                this.props.limit +
              this.props.limit,
            position: "right",
            axisLine: {
              lineStyle: {
                color: "blue"
              }
            },
            interval: 5,
            axisLabel: {
              formatter: "{value} °C"
            }
          },
          {
            type: "value",
            name: "",
            min:
              Math.ceil(
                Math.min.apply(Math, this.props.series[2].data) /
                  this.props.limit
              ) *
                this.props.limit -
              this.props.limit,
            max:
              Math.ceil(
                Math.max.apply(Math, this.props.series[2].data) /
                  this.props.limit
              ) *
                this.props.limit +
              this.props.limit,
            position: "left",
            interval: 5,
            axisLabel: {
              formatter: "{value}mm"
            }
          }
        ]
      });
      console.log(newOptions);
      this.echartsReactRef.getEchartsInstance().setOption(newOptions);
    }
  }

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

export default EchartGraphBarHorizontal;
