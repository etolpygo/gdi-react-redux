import React from 'react';
import FeedItem from './FeedItem.jsx';

// Exercise 2: Set It Up
	// write a functional component
	// make it a div with class name FeedList
	// import FeedItem and include it inside the div
	// export the component!

// Exercise 3: Prop It Up
	// FeedList should accept props as params
	// destructure photos from props
	// iterate over the data and map each photo data to a FeedItem

const FeedList = (props) => {
	const { photos } = props;
	const photoItems = photos.map((photo) =>
		<FeedItem photo={photo} key={photo.id} />
	);
	return(
		<div className="FeedList">
			{photoItems}
		</div>
	);
} 

export default FeedList

