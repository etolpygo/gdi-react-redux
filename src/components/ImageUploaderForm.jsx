// Exercise 2: Set It Up
	// write a functional component
	// make it a form element with class name ImageUploaderForm
	// write one input element and button element inside.
	// export the component!
import React from 'react';

class ImageUploaderForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userInput: ''
		};
	}
	handleFormSubmit = (event) => {
		event.preventDefault();
		console.log('submitting')
		this.props.handleAddPhoto(this.state.userInput);
		this.setState({
			userInput: ''
		});
	}
	handleInputChange = (event) => {
		const value = event.target.value;
		this.setState({
			userInput: value
		});
	}
	render() {
		return (
			<form className="ImageUploaderForm">
				<input placeholder="enter a url here" value={this.state.userInput} onChange={this.handleInputChange} />
				<button onClick={this.handleFormSubmit}>Submit</button>
			</form>
		);
	}
}

import React from 'react';
