import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Switch from './../index.js';

class App extends Component {
	render () {
		return (
			<div>
				<header>
				<h2><a href='https://github.com/cmu-isle/react-switch'>React Switch</a></h2>
				<p>Click on the displayed option to switch between all available ones:</p>
				<Switch>
					<div>Option 1</div>
					<div>Option 2</div>
					<div>Option 3</div>
				</Switch>
				</header>
			</div>
		);
	}
}

ReactDOM.render( <App />, document.querySelector( '#app' ) );
