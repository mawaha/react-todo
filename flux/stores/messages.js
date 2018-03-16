import EventEmitter from 'events'
import dispatcher from '../dispatcher'
import * as ACTION from '../types'

class MessagesStore extends EventEmitter {
	constructor() {
		super()

		this._messages = []

		// Do these need binding, I don't think so
		this.action = this.action.bind(this)
		this.addMessage = this.addMessage.bind(this)
		this.removeMessage = this.removeMessage.bind(this)
	}

	get messages() {
		return this._messages
	}

	set messages(messages) {
		this._messages = messages
		this.emit('change', messages)
	}

	addMessage(message) {
		this.messages = [...this.messages, message]
	}

	removeMessage(payload) {
		this.messages = payload && payload._id
			? this.messages = this.messages.filter(message => {
				return message._id !== payload._id
			})
			: this.messages.slice(1)
	}

	action({type, payload}) {
		switch(type) {
			case ACTION.ADD_MESSAGE :
				this.addMessage(payload)
				break
			case ACTION.REMOVE_MESSAGE :
				this.removeMessage(payload)
				break
		}
	}
}

const store = new MessagesStore()

dispatcher.register(store.action)

export default store