import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { map, curry } from 'ramda'
import { uniqueId } from '../../utilities'
import Timers from '../../services/timers'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const { addTimer, removeTimer } = new Timers()

const Dialog = props => {
	const child = props.children
	const TagName = child.type
	const { messages, onTimeout, timeout } = props

	return ( 
		<div className="toast-container">
			<ReactCSSTransitionGroup
				transitionName="toast"
				transitionEnterTimeout={200}
				transitionLeave={true}
				transitionLeaveTimeout={200}>
	    
				{map(message => {
					const {_id: id} = message
					addTimer(onTimeout, timeout, id)

					return <TagName key={id} {...message} 
								onClick={() => onTimeout(message)}
								onMouseOver={() => removeTimer(id)}
								onMouseLeave={() => addTimer(onTimeout, timeout, id)}
								>
						{child.props.children}
					</TagName>
				}, messages)}

			</ReactCSSTransitionGroup>
		</div>
	)
}

Dialog.defaultProps = {
	messages: [],
	timeout: 3000,
	onTimeout: () => {}
}

Dialog.propTypes = {
	messages: PropTypes.array,
	onTimeout: PropTypes.func,
	children: PropTypes.element.isRequired, // Single child element
	timeout: PropTypes.number
}

export default Dialog