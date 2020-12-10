import React from 'react';

// function that returns a  component function
const withClass = (WrappedComponent, className) => {
	return (props) => (
		<div className={className}>
			<WrappedComponent {...props} />
		</div>
	);
};

export default withClass;
