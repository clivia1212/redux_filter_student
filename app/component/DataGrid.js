import React,{ Component } from 'react';

export default class DataGrid extends Component {
	
	static propTypes () {
		contentData: PropTypes.arrayOf(PropTypes.shape({
					    id: PropTypes.number.isRequired,
					    name: PropTypes.string.isRequired,
					    sex: PropTypes.string.isRequired
					  }).isRequired).isRequired
	}

	constructor(props) {
		super(props);
	}

	render() {
		const {contentData} = this.props;
		return (
			<table className="gradeTable">
				<thead>
					<tr>
						<th>姓名</th>
						<th>性别</th>
						<th>语文</th>
						<th>数学</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					{
						contentData.map((row,index) => {
							return (
								<tr key={index}>
									<td>{row.name}</td>
									<td>{row.sex}</td>
									<td>{row.english}</td>
									<td>{row.math}</td>
									<td><a href="##">{row.operation[0]}</a>  <span onClick={()=>{this.deleteRow(row._id)}}>{row.operation[1]}</span></td>
								</tr>
								)
						})
					}
				</tbody>
			</table>
		)
		
	}
}