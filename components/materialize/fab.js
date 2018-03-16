import React from 'react'
import { map } from 'ramda'
import Button from './button'
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './fab.scss'

const Fab = props => {
  const { direction, size, children, className, toggle, type } = props
  const buttons = (Button, i) => <li key={i}>{Button}</li>

  return (
    <div {...props} className={`${type}-action-btn ${toggle}-to-toggle ${direction}`}>
      <a className={`btn-floating ${className}`}>
        <i className="material-icons">mode_edit</i>
      </a>
      <ReactCSSTransitionGroup transitionName="fab"
        transitionEnterTimeout={200}
        transitionLeaveTimeout={200}
        component="ul">
        {children.map(buttons)}
      </ReactCSSTransitionGroup>
    </div>)
}

Fab.defaultProps = {
  direction: 'vertical',
  toggle: 'hover',
  type: 'fixed',
  className: ''
}

Fab.propTypes = {
  direction: PropTypes.string,
  toggle: PropTypes.oneOf(['click', 'hover']),
  type: PropTypes.oneOf(['fixed', 'floating'])
}

export default Fab