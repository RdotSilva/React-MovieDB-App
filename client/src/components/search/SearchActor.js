import React, { Component } from 'react';
import MovieDisplay from '../display/MovieDisplay';
import Search from './Search';
import axios from 'axios';
import apiKey from '../../config_keys';

const baseURL = 'https://api.themoviedb.org/3/';

class SearchActor extends Component {
	searchPerson = async searchValue => {
		// Search for person. This will give access to ID of person.
		const response = await axios
			.get(
				`${baseURL}search/person?api_key=${apiKey}&query=${searchValue}`
			)
			.then(res => this.setState({ actorId: res.data.results }));
		console.log(this.state);
	};

	render() {
		return <div />;
	}
}

export default SearchActor;
