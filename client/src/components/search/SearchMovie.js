import React, { Component } from 'react';
import MovieDisplay from '../display/MovieDisplay';
import Search from './Search';
import axios from 'axios';

const apiKey = '53d84fb2d3fffb38f67498a4522c2728';
const baseURL = 'https://api.themoviedb.org/3/';

class SearchMovie extends Component {
	state = {
		movies: [],
		completed: false
	};

	searchForMovies = searchValue => {
		axios
			.get(
				`${baseURL}search/movie?api_key=${apiKey}&language=en-US&query=${searchValue}&page=1&include_adult=false`
			)
			.then(res =>
				this.setState({ movies: res.data.results, completed: true })
			);
		console.log(this.props);
	};

	render() {
		const { movies } = this.state;

		const movieList = movies.map(function(movie) {
			return <MovieDisplay movie={movie} />;
		});

		return (
			<div>
				<Search search={this.searchForMovies} />; // TODO: Loop through
				movie list and display each movie. Must be done after the axios
				call is complete.
				{movieList}
			</div>
		);
	}
}

export default SearchMovie;
