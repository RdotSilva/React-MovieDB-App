import React, { Component } from 'react';
import styles from './MovieDisplay.module.css';

class MovieDisplay extends Component {
	render() {
		// Use deconstructor to pull movie from props
		const { movie } = this.props;
		let baseImgUrl = 'http://image.tmdb.org/t/p/w185/';
		let imageSource;

		// Check if movie image is available, if not use default image
		if (
			`${baseImgUrl}${movie.poster_path}` ===
			'http://image.tmdb.org/t/p/w185/null'
		) {
			imageSource = '/noimage.jpg';
		} else {
			imageSource = `${baseImgUrl}${movie.poster_path}`;
		}

		return (
			<div className={styles['movie-border-box']}>
				<div className={styles['movie-image-container']}>
					<img
						src={imageSource}
						alt=""
						className={styles['movie-image']}
					/>
				</div>
				<div className={styles['movie-info']}>
					<h1 className={styles['movie-title']}>{movie.title}</h1>
					<p className={styles['movie-release-date']}>{movie.date}</p>
					<p className={styles['movie-overview']}>{movie.overview}</p>
				</div>
			</div>
		);
	}
}

export default MovieDisplay;
