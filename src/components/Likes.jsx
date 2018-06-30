// Exercise 2: Set It Up
	// write a functional component
	// make it a div with a class name of Likes
	// write a span and a button element inside
	// export the component!

import React from 'react';

const Likes = () => {
	return (
		<div className="Likes">
			<span>likes</span>
			<button className="LikesButton">
				Like
			</button>
		</div>
	);
}

export default Likes;
