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
			<div className={styles['actor-border-box']}>
				<div className={styles['actor-image-container']}>
					<img
						className={styles['actor-image']}
						src={this.imageSource}
					/>
				</div>
				<div className={styles['actor-info']}>
					<h1 className={styles['actor-title']}>{actor.name}</h1>
					<p className={styles['actor-birthday']}>
						Born on: {actor.birthday}
					</p>
					<a href="https://www.imdb.com/name/${actor.imdb_id}/">
						IMDB
					</a>
				</div>
				<div className={styles['actor-movie-credits']}>
					<ul className={styles['actor-movie-credits-list']} />
				</div>
				<div className={styles['actor-bio']}>
					<p className={styles['actor-bio-text']}>
						{actor.biography}
					</p>
				</div>
			</div>
		);
	}
}

export default ActorDisplay;
