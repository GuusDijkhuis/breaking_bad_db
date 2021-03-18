import React, { Component } from 'react';

import './index.css';

class EpisodeListItem extends Component {

	render() {
		return (
			<div className="EpisodeListItem">
				<input type="checkbox"></input>
				<a className="EpisodeLink" href="#">
					<h3>{this.props.data.episode_id} {this.props.data.title}</h3>
				</a>
			</div>
		);
	}
}

export default EpisodeListItem;