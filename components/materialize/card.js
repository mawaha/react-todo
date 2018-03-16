import React from 'react'

const Card = props => {
  return (
    <div className="card">
      <div className="card-image">
        <img src="images/sample-1.jpg" />
        <span className="card-title">Card Title</span>
        <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
      </div>
      <div className="card-content">
        {props.children}
      </div>
    </div>
  )
}

export default Card