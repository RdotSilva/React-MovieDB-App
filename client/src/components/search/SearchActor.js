import React, { Component } from 'react';
// import ActorDisplay from '../display/ActorDisplay';
import Search from './Search';
import axios from 'axios';
import apiKey from '../../config_keys';

const baseURL = 'https://api.themoviedb.org/3/';

class SearchActor extends Component {
	state = {
		actorId: [],
		actorDetails: [],
		allMovieCredits: [],
		eightMovieCredits: []
	};

	searchPerson = async searchValue => {
		// Search for person. This will give access to ID of person.
		await axios
			.get(
				`${baseURL}search/person?api_key=${apiKey}&query=${searchValue}`
			)
			.then(res => this.setState({ actorId: res.data.results[0].id }));
		console.log(this.state);
	};

	getPersonDetails = async () => {
		await axios
			.get(
				`${baseURL}person/${
					this.state.actorId
				}?api_key=${apiKey}&language=en-US`
			)
			.then(res => this.setState({ actorDetails: res.data }));
		console.log(this.state);
	};

	showPersonDetails = searchValue => {
		this.searchPerson(searchValue)
			.then(id => {
				this.getPersonDetails(id);
			})
			.then(() => this.getMovieCredits());
	};

	getMovieCredits = async () => {
		await axios
			.get(
				`${baseURL}person/${
					this.state.actorId
				}/movie_credits?api_key=${apiKey}&language=en-US`
			)
			.then(movies => {
				this.setState({ allMovieCredits: movies.data });
			});
		console.log(this.state);
	};

	render() {
		return (
			<div>
				<Search search={this.showPersonDetails} />
			</div>
		);
	}
}

export default SearchActor;
