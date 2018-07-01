import React from 'react';

// Exercise 2: Set It Up
// write a functional component
// make it a form element with class name ImageUploaderForm
// write one input element and button element inside.
// export the component!

const ImageUploaderForm = () => {
  return(
    <div className="feedList">
	  <form className="ImageUploaderForm">
	  	<input type="text" />
	  	<button>click me!</button>
	  </form>
    </div>
  );
} 

export default ImageUploaderForm