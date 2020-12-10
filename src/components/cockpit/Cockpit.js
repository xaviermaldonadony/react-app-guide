import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
	const toggleBtnRef = useRef(null);

	// useEffect runs every render cycle, take parameters into consideration
	// Similar to ComponentDidMount and
	// componentDidUpdate
	// getDerivesStateFromprops() is not available but you can use, useState()
	// you have that available since it's a functional component

	// useEffect(() => {
	// 	console.log('[Cockpit.js] useEffect');
	// 	// Http request ...
	// 	setTimeout(() => {
	// 		alert('Saved data');
	// 	}, 1000);
	// }, [props.persons]); // multiple fields

	useEffect(() => {
		console.log('[Cockpit.js] useEffect []');
		toggleBtnRef.current.click();
		// Http request ...
		// setTimeout(() => {
		// 	alert('Saved data');
		// }, 1000);
		// clean up with useEffect ex
		return () => {
			// clearTimeout(timer);
			console.log('[cockpit.js] cleanup work in useEffect');
		};
		// will run the first time that is the default since it doesn't have any dependencies
		// it will only runs when the componeted is mounted and unmounted
	}, []);

	useEffect(() => {
		console.log('[Cockpit.js] 2nd useEffect []');
		return () => {
			console.log('[cockpit.js] cleanup work in 2nd  useEffect');
		};
	});

	const assignedClasses = [];
	let btnClass = '';

	if (props.showPersons) {
		btnClass = classes.Red;
	}

	if (props.personsLength <= 2) {
		assignedClasses.push(classes.red); // classes = ['red']
	}
	if (props.personsLength <= 1) {
		assignedClasses.push(classes.bold); // classes = ['red', 'bold']
	}

	return (
		<div className={classes.Cockpit}>
			<h1>{props.title}</h1>
			<p className={assignedClasses.join(' ')}>This is really working!</p>
			<button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
				Toggle Persons
			</button>
		</div>
	);
};

export default React.memo(Cockpit);
