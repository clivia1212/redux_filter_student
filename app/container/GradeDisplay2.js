import React,{Component} from 'react';
import DataGrid from '../component/DataGrid';
import NameFilter from '../component/NameFilter';
import SexFilter from '../component/SexFilter';

export default class GradeDisplay extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filterSex: 'All',
			filterName: '',
			className: 'StudentGradeTable'
		}
	}

	filterTrigger(val,type){
		console.log(this);
		if(type == 'sex'){
			this.setState({
				filterSex: val
			})
		}
		if(type == 'name'){
			this.setState({
				filterName: val
			})
		}
	}

	render() {

		return (
			<div className="gradeWrapper">
				<h3>学习成绩表</h3>
				<NameFilter nameFilter={this.filterTrigger.bind(this)} />
				<SexFilter sexFilter={this.filterTrigger.bind(this)} />
				<DataGrid filterSex={this.state.filterSex} filterName={this.state.filterName} />
			</div>
		)
	}
}