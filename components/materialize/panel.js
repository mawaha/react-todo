import React from 'react'

const CardPanel = props => {
	return (
		<div className={`card-panel ${props.className}`}>
	    	{props.children}
	    </div>
    )
}

export default CardPanel