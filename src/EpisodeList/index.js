import React, { Component } from 'react';
import EpisodeListItem from '../EpisodeListItem';

import './index.css';

class ToDoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			episodes: []
		}
	}
	componentDidMount() {
		fetch('https://www.breakingbadapi.com/api/episodes')
		.then(response => response.json())
		.then(result => {
			this.setState({episodes: result})
		})
		.catch(e => {
			console.log(e);
		});
	};
	render() {
		return (
			<div className="ToDoList">
				{
					this.state.episodes.map(episode => <EpisodeListItem data={episode} />)
				}
				
			</div>
		)
	}
}

export default ToDoList;