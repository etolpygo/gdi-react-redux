// Exercise 2: Set It Up
	// write a functional component
	// make it a form element with class name ImageUploaderForm
	// write one input element and button element inside
	// export the component!

// Exercise 6: Get InFormation
// rewrite this component to accept user input
	 // when the user inputs a url, the component should log it to the console
	 // create internal state, to hold the user inputted value
	 // render a form element containing:
			// input element with a onChange attribute
			// button with an onSubmit() attribute
	 // write a handleChange() function to store the input
	 // write a handleSubmit() function to print to the console

import React, { Component } from 'react';

class ImageUploaderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    }
  }

	handleChange = (e) =>
  	this.setState({ url: e.target.value });

	handleSubmit = (e) => {
		e.preventDefault();
  	console.log(this.state.url);
  }

	render() {
		return (
			<form className="ImageUploaderForm">

				<input
					placeholder="Add URL here"
					value={this.state.url}
					onChange={this.handleChange} />

				<button className="SubmitButton" onClick={this.handleSubmit} >
					Submit
				</button>

			</form>
		)
	}
}

export default ImageUploaderForm;
