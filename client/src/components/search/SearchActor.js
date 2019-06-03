import React, { Component } from "react";
import ActorDisplay from "../display/ActorDisplay";
import Search from "./Search";
import axios from "axios";
import apiKey from "../../config_keys";

const baseURL = "https://api.themoviedb.org/3/";

class SearchActor extends Component {
	state = {
		actorId: [],
		actor: [],
		allMovieCredits: [],
		eightMovieCredits: []
	};

	searchPerson = async searchValue => {
		// Search for person. This will give access to ID of person.
		await axios
			.get(
				`${baseURL}search/person?api_key=${apiKey}&query=${searchValue}`
			)
			.then(res => this.setState({ actorId: res.data.results[0].id }))
			.catch(err => console.log(err));
	};

	getPersonDetails = async () => {
		await axios
			.get(
				`${baseURL}person/${
					this.state.actorId
				}?api_key=${apiKey}&language=en-US`
			)
			.then(res => this.setState({ actor: res.data }));
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
				let movieCredits = [];
				// Get first 8 movie credits for actor
				for (let i = 0; i <= 7; i++) {
					movieCredits.push(movies.data.cast[i]);
				}
				this.setState({ eightMovieCredits: movieCredits });
			});
	};

	render() {
		return (
			<div>
				<Search search={this.showPersonDetails} />
				{console.log(this.state.eightMovieCredits)}
				<ActorDisplay
					actor={this.state.actor}
					actorCredits={this.state.eightMovieCredits}
				/>
			</div>
		);
	}
}

export default SearchActor;
