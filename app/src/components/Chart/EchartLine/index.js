import React, {Component} from 'react';
import './styles.css';

import ReactEcharts from "echarts-for-react";

class EchartGraph extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            graphOption: {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line'
                }]
            }
        }
    }

    componentDidMount() {
        this.echartsInstance = this.echartsReactRef.getEchartsInstance();
        this.zr = this.echartsInstance.getZr();

        this.zr.on('click', this.onChartClick);
    }

    onChartClick = (...rest) => {
        console.log('App:onClickChart', rest);
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">

                    <ReactEcharts
                        style={{height: '50vh', width: '100vw'}}
                        ref={(e) => {
                            this.echartsReactRef = e;
                        }}
                        option={this.state.graphOption}
                    />
                </header>
            </div>
        );
    }
}

export default EchartGraph;