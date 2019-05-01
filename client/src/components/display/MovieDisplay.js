import React, { Component } from 'react';
import styles from './MovieDisplay.module.css';
import noImageFound from '../../../src/img/noimage.jpg';

class MovieDisplay extends Component {
	formatDate = date => {
		// Format date from 2018-10-03 to October 2, 2018
		let newDate = new Date(date);
		let monthNames = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];

		let day = newDate.getDate();
		let monthIndex = newDate.getMonth();
		let year = newDate.getFullYear();
		return `${monthNames[monthIndex]} ${day}, ${year}`;
	};

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
			imageSource = noImageFound;
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
					<p className={styles['movie-release-date']}>
						Release Date:
						{movie.release_date.length > 0
							? this.formatDate(movie.release_date)
							: 'Unknown'}
					</p>
					<p className={styles['movie-overview']}>{movie.overview}</p>
				</div>
			</div>
		);
	}
}

export default MovieDisplay;
