import React from 'react'
import PropTypes from 'prop-types';
import { mergeClassNames } from '../../utilities'

const Container = props => {

	const fluid = props.fluid ? ' container-fluid' : ''
	const defaultClassNames = `container${fluid}`

	const classNames = mergeClassNames(defaultClassNames, props.className)

	return (
		<div {...props} className={classNames}>{props.children}</div>
	)
}

Container.defaultProps = {
	className: ''
}

Container.propTypes = {
	fluid: PropTypes.bool
}

export default Container
