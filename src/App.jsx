// Exercise 2: Set It Up
	// write a functional component
	// make it a div with a class name of App
	// import Header and Homepage
	// include them inside of App
	// export the App component!

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import ProfilePage from './pages/ProfilePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import HomePage from './pages/HomePage.jsx';
import Header from './components/Header.jsx';

const App = () => {
  return (
    <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/profile" component={ProfilePage} />
        </div>
    </BrowserRouter>
  );
}

export default App;
