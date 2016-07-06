import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import GradeDisplay from './container/GradeDisplay';
import './index.less';


class App extends Component {

	render() {
		return(
			<GradeDisplay />
		)
	}
}

ReactDOM.render(<App />,document.getElementById('app'));