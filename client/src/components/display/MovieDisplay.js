import React, { Component } from 'react';

class MovieDisplay extends Component {
	render() {
		return (
			<div className="movie-border-box">
				<div className="movie-image-container">
					<img src="" alt="" className="move-image" />
				</div>
				<div className="movie-info">
					<h1 className="movie-title">TEST</h1>
					<p className="movie-release-date">Date</p>
					<p className="movie-overview">Overview</p>
				</div>
			</div>
		);
	}
}

export default MovieDisplay;
