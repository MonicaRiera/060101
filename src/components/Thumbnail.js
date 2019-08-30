import React from 'react';
import '../styles/Thumbnail.css'

class Thumbnail extends React.Component {
	state = {
		place : this.props.place,
		liked: false
	}

	likeButton = () => {
		let liked = this.state.liked
		liked = !this.state.liked
		this.setState({liked: liked})
	}

	render() {
		return (<div className="thumbnail">
		<h3>{this.state.place.title}</h3>
		<small>{this.state.place.location}</small>
		<h4>{this.state.place.price}</h4>
		<button onClick={this.likeButton} className={
			this.state.liked ? "liked" : ''
		}>Like</button>
		</div>)
	}
}

export default Thumbnail;
