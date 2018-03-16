import React from 'react'
import PropTypes from 'prop-types';
import { omit } from 'ramda'
import './toast.scss'


/*
	Messages supplied in the form :
	{
		_id: message_1234,
		label: 'foo'
	}
*/

const Toast = props => {
	const properties = omit(['onTimeout'], props)

	return (
		    <div {...properties} className="toast pending">
				<span>{props.label}</span>
				{ properties.children }
			</div>
	)
}

Toast.propTypes = {
	message: PropTypes.object,
	onTimeout: PropTypes.func
}

export default Toast