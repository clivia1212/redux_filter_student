import React,{Component} from 'react';
import fetch from 'node-fetch';

export default class DataGrid extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contentData: []
		};
	}

	componentDidMount(){
		
		fetch("http://localhost:8080/contentData.json").then(function(res) {

			if (res.ok) {

				res.json().then(function (data) {
			      this.setState({contentData: data});
			    }.bind(this));
			    
			} else {
				console.log("Looks like the response wasn't perfect, got status", res.status);
			}

		}.bind(this), function (e) {
			console.log('fetch failed!', e);
		});
		
	}

	deleteRow(id) {
		console.log(id);
		let newData = this.state.contentData.filter(dt => dt._id != id);

		this.setState({
			contentData: newData
		});

	}

	render() {
		const {filterSex,filterName} = this.props;

		let contentData = [];
		if(filterSex == 'All'){
			contentData = this.state.contentData;
		}else{
			contentData = this.state.contentData.filter(data => data.sex == filterSex);
		}

		if(filterName){
			contentData = contentData.filter(data => data.name.includes(filterName));
		}


		if(contentData.length >0 ){
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
		}else{
			return (<div></div>)
		}
		
	}
}