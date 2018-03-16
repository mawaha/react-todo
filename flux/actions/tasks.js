import dispatcher from '../dispatcher'
import * as ACTION from '../types'
import { post, get, remove, put } from '../../utilities/ajax'

export function addTask(payload) {
	post('/api/tasks', payload)
		.fork(error => {
			throw error
		}, response => {
			dispatcher.dispatch({
				type: ACTION.ADD_TASK,
				payload: response.data
			})
		})
}

export function allTasks() {
	get('/api/tasks', {})
		.fork(error => {
			throw error
		}, response => {
			const payload = response.data

			dispatcher.dispatch({
				type: ACTION.ALL_TASKS,
				payload
			})
		})
}

export function removeTask(task) {
console.log(task);
	remove('/api/tasks', task)
		.fork(error => {
			throw error
		}, response => {

			if (!response.data.removed) return;

			dispatcher.dispatch({
				type: ACTION.REMOVE_TASK,
				payload: task
			})
		})

}

export function completeTask(task) {
console.log('actions completeTask', task);
	put('/api/tasks', Object.assign({}, task, {complete: true}))
		.fork(error => {
			throw error
		}, response => {
console.log('response', response.data);
			if (!response.data.complete) return;

			dispatcher.dispatch({
				type: ACTION.COMPLETE_TASK,
				payload: response.data
			})
		})
}
