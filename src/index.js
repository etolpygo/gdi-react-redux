// Exercise 1: Render It
// import React
// import ReactDOM
// import App
// import styles
// render App component into app-root element

import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App.jsx';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

ReactDOM.render(
	<App />,
	document.getElementById('app-root')
);

