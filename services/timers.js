import { curry } from 'ramda'

const Timers = function() {
	this._byId = {}
	this.addTimer = this.addTimer.bind(this)
	this.removeTimer = this.removeTimer.bind(this)
}

Object.assign(Timers.prototype, {

	addTimer: function(callback, duration, id) {
		if (this._byId[id]) return
		return this._byId[id] = setTimeout(callback, duration)
	},

	removeTimer: function(id) {
		if (!this._byId[id]) return
		clearTimeout(this._byId[id])
		delete this._byId[id]
	}
})

export default Timers
