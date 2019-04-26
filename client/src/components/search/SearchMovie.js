import React, { Component } from 'react';
import Search from './Search';
import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3/';

class SearchMovie extends Component {
	constructor(props) {
		super(props);
	}
	state = {
		movies: [],
		completed: false,
		searchValue: this.props.searchValue
	};

	componentDidMount() {
		axios
			.get(
				`${baseURL}search/movie?api_key=${apiKey}&language=en-US&query=${
					this.state.searchValue
				}&page=1&include_adult=false`
			)
			.then(res => this.setState({ movies: res.data, completed: true }));
		console.log(this.props);
	}

	render() {
		return <Search />;
	}
}

export default SearchMovie;
