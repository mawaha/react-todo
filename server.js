const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { Task: TaskModel } = require('./models/task')

const app = express()

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/to-do', err => {
	err && console.log(err)
})

app.use(express.static('deploy'))
app.use(bodyParser.json())
app.use(bodyParser.text())

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
	res.render('blank')
})

/* API */

app.route('/api/tasks')
	.get((req, res) => {
		TaskModel.find({}, (err, tasks) => {
			if (err || !tasks) throw error
			else res.send(tasks)
		})
	})

	.post((req, res) => {
		const task = new TaskModel(req.body)
		task.save()
		res.send(task)
	})

	.delete((req, res) => {
		const _id = req.body
		TaskModel.remove({_id}, (err, response) => {
			res.send({removed: Boolean(!err)})
		})
	})

	/*
	 * Returns the updated task
	 */
	.put((req, res) => {
		const { _id } = req.body

		if (!_id) return

		TaskModel.findByIdAndUpdate(_id, req.body, (err, response) => {
			const task = response.toJSON()
			task.complete = Boolean(!err)
			res.send(task)
		})
	})

app.route('/api/tasks/:id')
	.get((req, res) => {
		const _id = req.params.id
		const task = TaskModel.find({_id}, (err, response) => {
			res.send(response)
		})
	})

app.listen(3000, () => {
	console.log('Server started on port 3000');
})
