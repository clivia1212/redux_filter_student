import React, {Component} from 'react';
import { connect } from 'react-redux'

class SexFilter extends Component {

	static propTypes() {
		dispatch: propTypes.func.isRequired
	}

	constructor(props) {
		super(props)
	}

	handleChange(e) {
		//const {sexFilter} = this.props;
		//sexFilter(e.target.value,'sex');
		console.log(e);
		dispatch(setVisibilityFilter('sex',e.target.value));
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

SexFilter = connect()(SexFilter)

export default SexFilter