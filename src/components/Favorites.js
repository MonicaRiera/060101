import React from 'react';
import '../styles/Favorites.css'
import Thumbnail from './Thumbnail'

class Favorites extends React.Component {
	state = {
		favorites : this.props.favorites
	}

	render() {
		return (
			<div>
			{
				this.props.favorites.map((f, i) =>
					<Thumbnail place={f} key={i}/>
				)
			}
			</div>
		)
	}
}

export default Favorites;
