import React,{Component} from 'react'
import VisibleDataGrid from './VisibleDataGrid'
import NameFilter from '../component/NameFilter'
import SexFilter from '../component/SexFilter'
import Footer from '../component/Footer'

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
				{/*<NameFilter nameFilter={this.filterTrigger.bind(this)} />
				<SexFilter />*/}

				<VisibleDataGrid />
				<Footer />
			</div>
		)
	}
}