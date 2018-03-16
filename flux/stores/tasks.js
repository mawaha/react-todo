import EventEmitter from 'events'
import { sort } from 'ramda'
import get from '../../utilities/ajax'
import dispatcher from '../dispatcher'
import * as ACTION from '../types'
import { allTasks } from '../actions/tasks'

class TasksStore extends EventEmitter {

	constructor() {
		super()

		this._tasks = []

		allTasks()

		// Do these need binding, I don't think so
		this.action = this.action.bind(this)
		this.appendTask = this.appendTask.bind(this)
		this.removeTask = this.removeTask.bind(this)
		this.completeTask = this.completeTask.bind(this)
	}

	get tasks() {
		return [...this._tasks]
	}

	set tasks(tasks) {
		this._tasks = tasks
		this.emit('change', tasks)
	}

	appendTask(task) {
		const tasks = [...this._tasks, task]
		this.tasks = tasks
	}

	setTasks(tasks) {
		this.tasks = tasks
	}

	removeTask({_id}) {
		this.tasks = this.tasks.filter(task => {
			return task._id !== _id
		})
	}

	completeTask({_id}) {
		// Inefficient: use util or for loop
		this.tasks = this.tasks.map(task => {
			if(task._id === _id) task.complete = true
			return task
		})
	}

	action({ type, payload }) {
		switch(type) {
			case ACTION.ADD_TASK :
				this.appendTask(payload)
				break
			case ACTION.ALL_TASKS :
				this.setTasks(payload)
				break
			case ACTION.REMOVE_TASK :
				this.removeTask(payload)
				break
			case ACTION.COMPLETE_TASK :
				this.completeTask(payload)
				break
		}
	}
}

const store = new TasksStore()

dispatcher.register(store.action)

export default store