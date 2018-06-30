// Exercise 2: Set It Up
	// write a functional component
	// make it a div with class name FeedList
	// import FeedItem and include it inside the div
	// export the component!

import React from 'react';
import FeedItem from './FeedItem.jsx';

const FeedList = () => {
  return (
    <div className="FeedList">
      <FeedItem />
    </div>
  );
};

export default FeedList;
