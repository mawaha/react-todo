import React, { Component } from 'react'
import Tasks from './tasks/tasks'
import TaskInput from './tasks/taskInput'
import Header from './header'
import { Container, NavBar, Dialog, Toast } from './materialize'
import { messagesStore } from '../flux/stores'
import { removeMessage, addMessage } from '../flux/actions'

class App extends Component {

	state: {
		messages: []
	}

	componentDidMount() {
		messagesStore.on('change', (messages) => {
			this.setState({messages})
		})
	}

	render() {

		return (
			<div>
				<NavBar>
					<a href="#" className="brand-logo center">Logo</a>
				</NavBar>
				<Container>
					<TaskInput />
					<Tasks />
				</Container>
				<Dialog messages={messagesStore.messages} onTimeout={removeMessage}>
					<Toast onClick={removeMessage}></Toast>
				</Dialog>
			</div>
		)
	}
}

export default App