import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import SearchMovie from './components/search/SearchMovie';
import SearchActor from './components/search/SearchActor';
import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Navbar />
					<Route exact path="/" component={Landing} />
					<Route exact path="/searchmovie" component={SearchMovie} />
					<Route exact path="/searchactor" component={SearchActor} />
				</div>
			</Router>
		);
	}
}

export default App;
