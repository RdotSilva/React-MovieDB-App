import React, { Component } from 'react';
import styles from './ActorDisplay.module.css';
import noImageFound from '../../../src/img/noimage.jpg';

class ActorDisplay extends Component {
	render() {
		// Use deconstructor to pull movie from props
		const { actor } = this.props;
		let baseImgUrl = 'http://image.tmdb.org/t/p/w185/';
		let imageSource;

		// Check if movie image is available, if not use default image
		if (
			`${baseImgUrl}${movie.poster_path}` ===
			'http://image.tmdb.org/t/p/w185/null'
		) {
			imageSource = noImageFound;
		} else {
			imageSource = `${baseImgUrl}${movie.poster_path}`;
		}

		return <div />;
	}
}

export default ActorDisplay;
