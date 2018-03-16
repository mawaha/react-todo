import axios from 'axios'
import Task from 'data.task'

export function get(url, data) {
	return new Task((reject, resolve) => {
		axios.get(url, data)
			.then(resolve)
			.catch(reject)
	})
}

export function post(url, data) {
	return new Task((reject, resolve) => {
		axios.post(url, data)
			.then(resolve)
			.catch(reject)
	})
}

export function remove(url, data) {
	return new Task((reject, resolve) => {
		axios.delete(url, {data})
			.then(resolve)
			.catch(reject)
	})
}

export function put(url, data) {
	return new Task((reject, resolve) => {
		axios.put(url, data)
			.then(resolve)
			.catch(reject)
	})
}