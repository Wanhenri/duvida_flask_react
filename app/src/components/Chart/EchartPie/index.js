import React, { Component } from "react";
import { Wrapper, Section } from "./styles";
import ReactEcharts from "echarts-for-react";

class EchartGraphPie extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {      
      graphOption: {
        backgroundColor: '#ffff',
        title: {
          text: "Temperatura das Capitais",
          left: "center",
          top: 20,
          textStyle: {
            color: "#ccc"
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        visualMap: {
          show: false,
          min: 0,
          max: 50,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: "Capitais",
            type: "pie",
            radius: "55%",
            center: ["50%", "50%"],
            type: "pie",
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 274, name: "联盟广告" },
              { value: 235, name: "视频广告" },
              { value: 400, name: "搜索引擎" }
            ].sort(function(a, b) { return a.value - b.value; }),
            roseType: "radius",
            label: {
              normal: {
                textStyle: {
                  color: 'rgba(255, 255, 255, 0.3)'
                }
              }
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: 'rgba(255, 255, 255, 0.3)'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
              }
            },
            itemStyle: {
              normal: {
                color: "#c26531",
                shadowBlur: 50,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            },
            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: function(idx) {
              return Math.random() * 200;
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
    if (this.props.series !== prevProps.series) {
      const newOptions = Object.assign(this.state.graphOption, {
        title: [{ text: this.props.textTile }],
        series: this.props.series,
        legend: {
          data: this.props.series.map(s => s.name)
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
            style={{ height: "40vh", width: "70vw", margin: "auto" }}
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

export default EchartGraphPie;
