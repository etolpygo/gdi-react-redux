// Exercise 2: Set It Up
	// write a functional component
	// make it a div with a class name of HomePage
	// import ImageUploaderForm and FeedList
	// include them inside of Homepage
	// export the Homepage component!

// Exercise 3: Prop It Up
// extract photos from data and then pass it into HomePage

// Exercise 4: Class It Up
// Turn HomePage from a functional to a class component
	 // handle import/inheritance
	 // add a render method

import React, { Component } from 'react';
import data from '../../data.json';
import ImageUploaderForm from '../components/ImageUploaderForm.jsx';
import FeedList from '../components/FeedList';

class HomePage extends Component {
	render() {
		const { photos } = data;
		return (
			<div className="HomePage">
				<ImageUploaderForm />
				<FeedList photos={photos} />
			</div>
		);
	}
}

export default HomePage;
