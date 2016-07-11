import React, {Component} from 'react';

export default class SexFilter extends Component {

	constructor(props) {
		super(props)
	}

	handleChange(e) {
		const {sexFilter} = this.props;
		sexFilter(e.target.value,'sex');
		console.log(e);
	}

	render() {

		return (
			<div className="filter">
				按性别筛选：
				<select onChange={this.handleChange.bind(this)}>
					<option>All</option>
					<option>男</option>
					<option>女</option>
				</select>
			</div>
		)
	}
}