import React from 'react'
import PropTypes from 'prop-types';
import { mergeClassNames } from '../../utilities'

const Button = (props) => {
	const defaultClassNames = 'btn'
	const classNames = mergeClassNames(defaultClassNames, props.className)
	const Tag = props.href ? 'a' : 'button'

	return (
		<Tag {...props} className={ classNames }>{props.children}</Tag>
	)
}

Button.defaultProps = {
	type: 'button',
	className: ''
}

Button.propTypes = {
	onClick: PropTypes.func,
	onMouseOver: PropTypes.func,
	type: PropTypes.oneOf(['submit', 'button']),
	className: PropTypes.string,
	href: PropTypes.string,
	floating: PropTypes.bool,
	raised: PropTypes.bool,
	size: PropTypes.oneOf(['small', 'large']),
	flat: PropTypes.bool,
	name: PropTypes.string,
	disabled: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.string
	])
}

export default Button