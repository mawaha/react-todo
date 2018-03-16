import React from 'react'
import PropTypes from 'prop-types';

const Col = props => {
	return (
		<div className="col">{props.children}</div>
	)
}

Col.propTypes = {
	width: PropTypes.number
}

export default Col