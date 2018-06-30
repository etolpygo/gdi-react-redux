// Exercise 2: Set It Up
	// write a functional component
	// make it a div with class name FeedItem
	// make an img element inside
	// import Likes, include it underneath img
	// export the component!

import React from 'react';
import Likes from './Likes.jsx';

const FeedItem = () => {
  return (
    <div className="FeedItem">
      <img className="Image" src={''} />
      <Likes />
    </div>
  );
};

export default FeedItem;
