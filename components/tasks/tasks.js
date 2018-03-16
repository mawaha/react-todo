import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { map, sort, compose } from 'ramda'
import Task from './task'
import taskStore from '../../flux/stores/tasks'

class Tasks extends Component {
	constructor(props) {
		super(props)

		this.state = {
			tasks: taskStore.tasks,
		}
	}

	componentDidMount() {
		taskStore.on('change', (tasks) => {
			this.setState({tasks})
		})
	}

	render() {
		const { tasks, input } = this.state
		const sortByComplete = sort((a, b) => {
			return a.complete - b.complete
		})
		const createTask = task => <Task key={task._id} {...task} />
console.log('sorted tasks', sortByComplete(tasks));
		return (
			<ReactCSSTransitionGroup
				transitionName="task"
				transitionEnterTimeout={200}
				transitionLeaveTimeout={200}>
				{map(createTask, sortByComplete(tasks))}
			</ReactCSSTransitionGroup>
		)
	}
}

export default Tasks