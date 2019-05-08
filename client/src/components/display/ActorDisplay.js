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

		return (
            <div className="actor-border-box">
                <div className="actor-image-container">
                        <img className="actor-image" src="${imageSource}">
                </div>
                <div className="actor-info">
                    <h1 className="actor-title">{actor.name}</h1>
                    <p className="actor-birthday">Born on: {/*this.formatDate*/(actor.birthday)}</p>
                    <a href="https://www.imdb.com/name/${actor.imdb_id}/">IMDB</a>
                </div>
                <div id="actor-movie-credits">
                    <ul id="actor-movie-credits-list">
                    </ul>   
                </div>
                <div className="actor-bio">
                    <p className="actor-bio-text">{actor.biography}</p>
                </div>
            </div>
        );
	}
}

export default ActorDisplay;
