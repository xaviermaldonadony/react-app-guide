import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';
import classes from './Person.module.css';
import withClass from '../../../hoc/withClass';

class Person extends Component {
	constructor() {
		super();
		this.inputElementRef = React.createRef();
	}

	componentDidMount() {
		// this.inputElement.focus();
		this.inputElementRef.current.focus();
	}

	render() {
		console.log('[Person.js] rendering...');
		return (
			// <Fragment >
			<Aux>
				<p key='i1' onClick={this.props.click}>
					I'm {this.props.name} and I am {this.props.age} years old!
				</p>
				<p key='i2'>{this.props.children}</p>
				<input
					key='i3'
					ref={this.inputElementRef}
					// ref={(inputEl) => {
					// 	this.inputElement = inputEl;
					// }}
					type='text'
					onChange={this.props.changed}
					value={this.props.name}
				/>
			</Aux>
			/* </Fragment> */
		);
	}
}

Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func,
};

export default withClass(Person, classes.Person);
