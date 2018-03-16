import React from 'react'
import PropTypes from 'prop-types';
import { map } from 'ramda'

export const CollectionItem = props => {
	const { className } = props
	return (
		<div {...props} className={`collection-item ${className}`}>{props.children}</div>
	)
}

CollectionItem.defaultProps = {
	className: ' '
}

CollectionItem.propTypes = {
}

const Collection = props => {
	return (
		<div {...props} className="collection">
			{map(CollectionItem, props.children)}
		</div>
	)
}

Collection.propTypes = {
	type: PropTypes.string
}

export default Collection
