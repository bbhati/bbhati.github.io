import React from 'react'
import Suggetions from './suggestions.js'

let DropDown = React.createClass({

	propTypes: {
		onChange: React.PropTypes.func,
		value: React.PropTypes.number,
		options: React.PropTypes.array
	},
	
	getInitialState (){
		return {value: this.props.value, showDropdown: false}

	},

	render () {
		return <div className="dropdown">
				<div className="input">
					<input className="yearInput" value={this.state.value}></input>
					<button className="downArrow">
					<i className="fa fa-arrow-down" onClick={this.toggleDropDown}></i></button>
				</div>
				{this.renderOptions()}
			</div>
	},

	renderOptions () {
		const onSelect = (value) => {
			this.setState({value: value, showDropdown: false})
			this.props.onSelect(value)
		};
		if(this.state.showDropdown)
			return <div className="result"><Suggetions onSelect={onSelect} data={this.props.options}/></div>
		else 
			return undefined
	},

	toggleDropDown () {
		this.setState({showDropdown: !this.state.showDropdown})
	}
})

export default DropDown;