import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Button, Icon, CardPanel, Fab } from '../materialize'
import { removeTask, completeTask, addTask } from '../../flux/actions/tasks'
import { addMessage } from '../../flux/actions/messages'
import './task.scss'

const handleRemoveTask = task => {
  removeTask(task)
  addMessage({
    label: 'You removed a message',
    action: 'undo',
    onActionClick: () => {
      addTask(task)
    }
  })
}

const Task = props => {
  const { _id, label, complete, className } = props
  const completedClass = complete ? 'grey lighten-5' : ''
  const LabelTag = complete ? 'del' : 'span'

  return (
    <CardPanel className={`task ${className} ${completedClass}`}>
      <LabelTag>{label}</LabelTag>
      <Fab direction="horizontal">
        <Button className="btn-floating red" title="delete task"
          onClick={() => handleRemoveTask(props)}
          >
          <Icon type="clear" />
        </Button>
        <Button className="btn-floating green darken-1" title="mark as done"
          onClick={() => completeTask({_id})}
          >
          <Icon type="check" />
        </Button>
      </Fab>
    </CardPanel>
  )
}

Task.defaultProps = {
  complete: false,
  className: ''
}

Task.propTypes = {
  complete: PropTypes.bool
}

export default Task
