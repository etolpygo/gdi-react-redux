// Exercise 2: Set It Up
	// write a functional component
	// make it a div with a class name of HomePage
	// import ImageUploaderForm and FeedList
	// include them inside of Homepage
	// export the Homepage component!

import React from 'react';
import data from '../../data.json';
import ImageUploaderForm from '../components/ImageUploaderForm.jsx';
import FeedList from '../components/FeedList';

const HomePage = () => {
	return (
		<div className="HomePage">
			<ImageUploaderForm />
			<FeedList />
		</div>
	);
}

export default HomePage;
