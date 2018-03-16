import React from 'react'
import PropTypes from 'prop-types';

const Icon = props => {

	return (
		<i {...props} className="material-icons">{props.type}</i>
	)
}

Icon.propTypes = {
	className: PropTypes.string,
	type: PropTypes.string.isRequired
}

export default Icon