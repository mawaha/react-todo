import dispatcher from '../dispatcher'
import * as ACTION from '../types'
import { post, get, remove, put } from '../../utilities/ajax'
import { prop } from 'ramda'

export function addTask(payload) {
	return post('/api/tasks', payload)
		.map(prop('data'))
		.fork(error => {
			throw error
		}, response => {
			dispatcher.dispatch({
				type: ACTION.ADD_TASK,
				payload: response
			})
		})
}

export function allTasks() {
	return get('/api/tasks', {})
		.map(prop('data'))
		.fork(error => {
			throw error
		}, response => {
			const payload = response

			dispatcher.dispatch({
				type: ACTION.ALL_TASKS,
				payload
			})
		})
}

export function removeTask(task) {

	return remove('/api/tasks', task)
		.map(prop('data'))
		.fork(error => {
			throw error
		}, response => {

			if (!response.removed) return;

			dispatcher.dispatch({
				type: ACTION.REMOVE_TASK,
				payload: task
			})
		})

}

export function completeTask(task) {

	return put('/api/tasks', Object.assign({}, task, {complete: true}))
		.map(prop('data'))
		.fork(error => {
			throw error
		}, response => {
			if (!response.complete) return;

			dispatcher.dispatch({
				type: ACTION.COMPLETE_TASK,
				payload: response
			})
		})
}
