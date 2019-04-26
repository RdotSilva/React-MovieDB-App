import React, { Component } from 'react';

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="/">
					The Movie Database
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarNavAltMarkup"
				>
					<div className="navbar-nav">
						<a
							className="nav-item nav-link active"
							href="/searchmovie"
						>
							Movie <span className="sr-only">(current)</span>
						</a>
						<a className="nav-item nav-link" href="actor">
							Actor
						</a>
						<a className="nav-item nav-link" href="topgrossing">
							Top Grossing
						</a>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
