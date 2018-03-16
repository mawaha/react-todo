import React from 'react'

const NavBar = props => {
	return (
		<nav>
			<div className="nav-wrapper">
				{props.children}
			</div>
		</nav>
	)
}

export default NavBar