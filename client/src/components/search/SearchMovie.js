import React, { Component } from 'react';
import MovieDisplay from '../display/MovieDisplay';
import Search from './Search';
import axios from 'axios';
import apiKey from '../../config_keys';

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
			return <MovieDisplay movie={movie} key={movie.id} />;
		});

		console.log(movies);

		return (
			<div>
				<Search search={this.searchForMovies} />
				{movieList}
			</div>
		);
	}
}

export default SearchMovie;
