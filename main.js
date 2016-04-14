import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Switch from './../index.js';

class App extends Component {
	render () {
		return (
			<div>
				<header>
				<h2><a href='https://github.com/cmu-isle/react-switch'>React Switch</a></h2>
				<Switch>
					<div>Option 1</div>
					<div>Option 2</div>
				</Switch>
				</header>
			</div>
		);
	}
}

ReactDOM.render( <App />, document.querySelector( '#app' ) );
