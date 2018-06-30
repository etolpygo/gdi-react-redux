// Exercise 2: Set It Up
// write a functional component
// make it a div with a class name of Likes
// write a span and a button element inside
// export the component!

// Exercise 3: Prop It Up
// Likes should take in number of likes as a prop and display it.

// Exercise 4: Class It Up
// Turn Likes from a functional to a class component.
	 // handle import/inheritance
	 // add a render method
	 // change props from function argument to object attribute

import React, { Component } from 'react';

class Likes extends Component {
	render() {
		const { totalLikes } = this.props;
		return (
			<div className="Likes">
				<span>{ totalLikes } likes</span>
				<button className="LikesButton">
					Like
				</button>
			</div>
		);
	}
}

export default Likes;
