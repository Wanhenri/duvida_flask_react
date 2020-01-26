import React, { Component } from "react";
import { Wrapper, Section } from "./styles";

import ReactEcharts from "echarts-for-react";

class EchartGraphBar extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      graphOption: {
        dataset: {
          source: [
            ["score", "amount", "product"],
            [89.3, 58212, "Matcha Latte"],
            [57.1, 78254, "Milk Tea"],
            [74.4, 41032, "Cheese Cocoa"],
            [50.1, 12755, "Cheese Brownie"],
            [89.7, 20145, "Matcha Cocoa"],
            [68.1, 79146, "Tea"],
            [19.6, 91852, "Orange Juice"],
            [10.6, 101852, "Lemon Juice"],
            [62.7, 20452, "a"],
            [32.7, 201452, "a"],
            [22.7, 20112, "b"],
            [82.7, 20122, "c"],
            [12.7, 20112, "d"],
            [92.7, 204512, "e"],
            [84.7, 20112, "f"],
            [33.7, 20112, "g"],
            [35.7, 20112, "h"],
            [36.7, 2042, "i"],
            [37.7, 20112, "j"],
            [38.7, 20112, "l"],
            [39.7, 20412, "m"],
            [40.7, 20112, "n"],
            [45.7, 20112, "o"],
            [42.7, 20223, "p"],
            [49.7, 20134, "q"],
            [80.7, 20167, "r"],
            [81.7, 20145, "s"]
          ]
        },
        grid: { containLabel: true },
        xAxis: { name: "amount" },
        yAxis: { type: "category" },
        visualMap: {
          orient: "horizontal",
          left: "center",
          min: 0,
          max: 35,
          text: ["High Score", "Low Score"],
          // Map the score column to color
          dimension: 0,
          inRange: {
            color: ["green", "blue", "#D7DA8B", "#F45577", "#E15457"]
          }
        },
        series: [
          {
            type: "bar",
            encode: {
              // Map the "amount" column to X axis.
              x: "amount",
              // Map the "product" column to Y axis
              y: "product"
            }
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
    if (this.props.source !== prevProps.source) {
      const newOptions = Object.assign(this.state.graphOption, {
        dataset: {
          source: this.props.source
        },
        xAxis: { name: this.props.source[0][0] },
        yAxis: {
          name: this.props.source[0][1],
          axisLabel: {
            interval: 0
          }
        },
        series: [
          {
            type: "bar",
            encode: {
              x: this.props.source[0][0],
              y: this.props.source[0][1]
            }
          }
        ]
      });
      console.log(newOptions);
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
            style={{ height: "40vh", width: "80vw", margin: "auto" }}
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

export default EchartGraphBar;
