import React from 'react'
import DataGrid from './dataGrid.js'
import DropDown from './dropDown.js'
import Chart from './chart.js'
import jquery from 'jquery'

let Container = React.createClass({
    getInitialState() {
        return { allData: [] }
    },

    componentWillMount() {
        jquery.get("http://localhost:3000/revenue.json").done((response) => {
            this.setState({ allData: response }, function() { this.setState({ year: this.getYearData()[0] }) })
        }).fail(function(xhr, status, errorThrown) {
            xhr.cancel;
            throw new Error({ message: errorThrown });
        });
    },

    getData(filter) {
        let allData = this.state.allData;
        if (filter) {
            let toFilter = [].slice.call(this.state.allData, 0);
            return toFilter.filter((datum) => {
                for (let i = 0; i < filter.length; i++) {
                    if (datum[filter[i].key] != filter[i].val) {
                        return false;
                    }
                }
                return true;

            })
        }
        return allData;
    },
    render() {
        const data = this.state.allData;
        const dataChangeHandler = function dataChangeHandler(product) {
            let byProduct = [].slice.call(data, 0);
            return byProduct.filter(function(datum) {
                if (datum.product == product) {
                    return true;
                }
            });
        };
        const yearFilterHandler = (year) => {
            this.setState({ year: year })
        };
        return <div className = "container" >
            < DropDown value = { this.getYearData()[0] }
        options = { this.getYearData() }
        onSelect = { yearFilterHandler }
        /> < div > { this.renderChart() } < /div> < div className = "datagrid" > { this.renderDataGrid() } < /div> < /div>
    },
    renderChart() {
        const onClick = (product) => {
            this.setState({ product: product })
        };
        return <Chart year = { this.state.year }
        data = { this.getFormattedChartData() }
        onClick = { onClick }
        />
    },
    renderDataGrid() {
        if (this.state.product) {
            const data = this.getData([{ key: "product", val: this.state.product }, { key: "year", val: this.state.year }])
            return <DataGrid data = { data }
            />
        }
    },
    getYearData() {
        const data = this.getData();
        let byProduct = [].slice.call(data, 0);
        return byProduct.map((datum) => {
            return datum.year;
        });
    },
    getFormattedChartData() {
        let allData = this.state.allData;
        let chartData = []
        let aggrByProduct = {}
        allData.map((datum) => {
            if (!aggrByProduct[datum.product]) {
                aggrByProduct[datum.product] = 0
            }
            if (datum.year == this.state.year) {
                aggrByProduct[datum.product] += datum.revenue
            }
        })

        Object.keys(aggrByProduct).map((datum) => {
            chartData.push({ name: datum, y: aggrByProduct[datum], color: '#ADD8E6' });
        })

        return chartData;
    }
});

export default Container;
