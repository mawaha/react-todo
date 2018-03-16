import dispatcher from '../dispatcher'
import * as ACTION from '../types'
import { uniqueId } from '../../utilities'

export function addMessage(payload) {
	payload._id = uniqueId('message_')
	dispatcher.dispatch({
		type: ACTION.ADD_MESSAGE,
		payload
	})
}

export function removeMessage(payload) {
	dispatcher.dispatch({
		type: ACTION.REMOVE_MESSAGE,
		payload // Currently unused
	})
}