import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import SearchMovie from './components/search/SearchMovie';
import './App.css';

class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<SearchMovie />
				<Landing />
			</div>
		);
	}
}

export default App;
