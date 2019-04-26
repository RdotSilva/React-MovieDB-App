import React, { Component } from 'react';

class SearchMovie extends Component {
	render() {
		return (
			<input
				style={{
					fontSize: 24,
					display: 'block',
					width: '99%',
					paddingTop: 8,
					paddingLeft: 16
				}}
				placeholder="Enter search term"
			/>
		);
	}
}

export default SearchMovie;
