import React, { Component } from 'react';

export default class PlusBtn extends Component {
	constructor(props) {
		super(props);
		this.click = this.click.bind(this);
	}
	click() {
		const filename = prompt("Filename: ");
		this.props.handleClick(filename);
	}
	render() {
		return <button onClick={this.click}>+</button>
	}
};
