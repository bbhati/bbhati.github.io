import React from 'react'
import ReactHighcharts from 'react-highcharts'

let Chart = React.createClass({
    render() {
        return <ReactHighcharts config = { this.getChartConfig() } > < /ReactHighcharts>;
    },

    getChartConfig() {
        const year = this.props.year
        const data = this.props.data
        const onClick = this.props.onClick
        const config = {
            "chart": {
                "plotBackgroundColor": null,
                "plotBorderWidth": null,
                "plotShadow": false,
                "type": "pie"
            },
            tooltip: {
                pointFormat: "{series.name}:{point.y:.1f}%"
            },

            plotOptions: {
                pie: {
                    slicedOffset: 0,
                    states: {
                        select: {
                            color: '#228B22'
                        },
                    },
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}: {point.percentage:.1f} %',
                        style: {
                            color: 'black'
                        }
                    },
                    showInLegend: false
                }
            },
            title: {
                text: 'Revenue by Product,' + year
            },
            "series": [{
                "data": data,
                type: 'pie',
                point: {
                    events: {
                        click: function(event) {
                            onClick(this.name);
                        }
                    }
                }
            }]
        }
        return config;
    }
});

export default Chart;
