import React, { Component } from 'react';
// import ActorDisplay from '../display/ActorDisplay';
import Search from './Search';
import axios from 'axios';
import apiKey from '../../config_keys';

const baseURL = 'https://api.themoviedb.org/3/';

class SearchActor extends Component {
	state = {
		actorId: []
	};

	searchPerson = async searchValue => {
		// Search for person. This will give access to ID of person.
		await axios
			.get(
				`${baseURL}search/person?api_key=${apiKey}&query=${searchValue}`
			)
			.then(res => this.setState({ actorId: res.data.results }));
		console.log(this.state);
	};

	render() {
		const test = 'testing';
		return (
			<div>
				{test}
				<Search search={this.searchPerson} />
			</div>
		);
	}
}

export default SearchActor;
