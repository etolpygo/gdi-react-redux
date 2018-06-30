// Exercise 2: Set It Up
	// write a functional component
	// make it a form element with class name ImageUploaderForm
	// write one input element and button element inside.
	// export the component!

import React from 'react';

const ImageUploaderForm = () => {
	return (
		<form className="ImageUploaderForm">
			<input placeholder="enter a url here" />
			<button>Submit</button>
		</form>
	);
}

export default ImageUploaderForm;
