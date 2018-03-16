import React, { Component } from 'react'
import { addTask } from '../../flux/actions/tasks'

class TaskInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    if (e) e.preventDefault()

    const { value } = this.state

    if (value === '') return

    addTask({ label: value, complete: false })

    this.setState({ value: '' })
  }

  handleChange(e) {
    if(e) e.preventDefault()

    const value = this.input.value

    this.setState({
      value
    })
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit} className="section">
          <div className="input-field">
            <i className="material-icons prefix">create</i>
            <input type="text" name="addTask"
              placeholder="Enter your task"
              value={this.state.value}
              onChange={this.handleChange}
              ref={input => {this.input = input}} />
            <label className="active" htmlFor="addTask">Task Name</label>
          </div>
          <button type="submit" className="btn waves-effect waves-light" disabled={Boolean(!this.state.value)}>
            Add
            <i className="material-icons right">add</i>
          </button>
        </form>
    )
  }
}

export default TaskInput