<<<<<<< HEAD
import React from 'react';
import data from '../../data.json';
import ImageUploaderForm from '../components/ImageUploaderForm.jsx';
import FeedList from '../components/FeedList.jsx';

=======
>>>>>>> b3e5aa2c95eb8be0d0e0e6ad8e9050b5a55570f7
// Exercise 2: Set It Up
	// write a functional component
	// make it a div with a class name of HomePage
	// import ImageUploaderForm and FeedList
	// include them inside of Homepage
	// export the Homepage component!

// Exercise 3: Prop It Up
// Need to extract photos from data and then pass it into HomePage

<<<<<<< HEAD
const HomePage = () => {
	const { photos } = data;
  return(
    <div className="HomePage">
	  <ImageUploaderForm />
      <FeedList photos={photos} />
    </div>
  );
} 


export default HomePage;
=======
// Exercise 4: Class It Up
// Turn HomePage from a functional to a class component
	 // handle import/inheritance
	 // add a render method

import React from 'react';
import data from '../../data.json';
>>>>>>> b3e5aa2c95eb8be0d0e0e6ad8e9050b5a55570f7
