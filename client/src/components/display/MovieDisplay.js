import React, { Component } from 'react';
import styles from './MovieDisplay.module.css';

class MovieDisplay extends Component {
	render() {
		let imageSource;
		if (
			`${baseImgUrl}${e.poster_path}` ===
			'http://image.tmdb.org/t/p/w185/null'
		) {
			imageSource = '/noimage.jpg';
		} else {
			imageSource = `${baseImgUrl}${e.poster_path}`;
		}

		return (
			<div className="movie-border-box">
				<div className="movie-image-container">
					<img src="" alt="" className="movie-image" />
				</div>
				<div className="movie-info">
					<h1 className="movie-title">{this.props.movie.title}</h1>
					<p className="movie-release-date">
						{this.props.movie.date}
					</p>
					<p className="movie-overview">
						{this.props.movie.overview}
					</p>
				</div>
			</div>
		);
	}
}

export default MovieDisplay;
