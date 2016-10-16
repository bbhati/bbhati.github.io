import React from 'react'

let Suggestions = React.createClass({

    getInitialState() {
        return { selected: [] }
    },

    render() {
        return <div className = "suggestions" > { this.renderTable() } < /div>
    },

    renderTable() {
        let rows = this.props.data.map((datum) => {
            let className = "dataRow"
            return <tr className = { className }
            key = { datum }
            onClick = { this.onClick } > < td data - obj = { datum } > { datum } < /td></tr >
        })
        return <table className = "rows" > < tbody > { rows } < /tbody></table >
    },

    onClick(event) {
        const target = event.target
        const key = event.target.dataset.obj
        this.props.onSelect(key)
    }
})

export default Suggestions;
