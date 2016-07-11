import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import gradeApp from './reducers/reducers'
import GradeDisplay from './container/GradeDisplay'
import './index.less'

let store = createStore(gradeApp)
class App extends Component {

	render() {
		return(
			<div>
			<GradeDisplay />
			<div>for test git</div>
			</div>
		)
	}
}

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
)