import React from 'react';
import '../styles/Favorites.css'
import Thumbnail from './Thumbnail'

class Favorites extends React.Component {

	render() {
		return (
			<div>
			{
				this.props.favorites.map((f, i) =>
					<Thumbnail place={f} key={i} likeButton={this.props.likeButton}/>
				)
			}
			</div>
		)
	}
}

export default Favorites;
