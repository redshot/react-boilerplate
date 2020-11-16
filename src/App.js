import React from 'react'
import {hot} from 'react-hot-loader'

class App extends React.Component {
	state = {
		count: 0
	}

	render() {

		const {count} = this.state

		return (
			<div>
				<h1 className={count > 10 ? 'warning' : null}>
					Hello World!
				</h1>
				<h2>Count: {this.state.count}</h2>
        <button onClick={() => this.setState(state => ({count: state.count + 1}))}>+</button>
        <button onClick={() => this.setState(state => ({count: state.count - 1}))}>-</button>
			</div>
		)
	}
}

export default hot(module)(App)

// This file is top level react component