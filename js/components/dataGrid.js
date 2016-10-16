import React from 'react';

let DataGrid = React.createClass({
    render() {
        let rows = this.props.data.map((datum, index) => {
            return <tr key = { index } > < td > { datum.year } < /td><td>{datum.product}</td > < td > { datum.country } < /td><td>{datum.revenue}</td > < /tr>
        });
        return <table > { this.renderHeader() } < tbody > { rows } < /tbody></table >
    },
    renderHeader() {
        return <thead > < th > Year < /th><th>Product</th > < th > Region < /th><th>Revenue</th > < /thead>
    }

});

export default DataGrid;
