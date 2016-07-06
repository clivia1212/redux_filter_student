import React, {Component} from 'react';

export default class NameFilter extends Component {

	constructor(props) {
		super(props)
	}

	handleChange(e) {
		const {nameFilter} = this.props;
		nameFilter(e.target.value,'name');
		console.log(e);
	}

	render() {

		return (
			<div className="filter">
				按姓名筛选：<input type="text" name="name" onChange={this.handleChange.bind(this)}/>
			</div>
		)
	}
}