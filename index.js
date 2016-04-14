import React from 'react';
import ReactDOM from 'react-dom';


class Switch extends React.Component {

	handleClick( event ) {
		let state = this.state;
		if ( state.pos + 1 >= this.props.children.length ) {
			state.pos = 0;
		} else {
			state.pos += 1;
		}

		this.setState({
			pos: state.pos
		});
	}

	makeVisible( element, index ) {
		let o = ( index !== this.state.pos ) ?  {style: {display: 'none'}} : {style: {display: 'inline'}};
		return React.cloneElement( element, o);
	}

	constructor() {
		super();
		this.state = {
			pos: 0
		};
	}

	render() {
		let children = React.Children.map( this.props.children, this.makeVisible.bind(this) );
		return (
			<div className="switch" onClick={this.handleClick.bind(this)}>
				{children}
			</div>
		);
	}
}


export default Switch;
