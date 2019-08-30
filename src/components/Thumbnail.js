import React from 'react';
import '../styles/Thumbnail.css'

class Thumbnail extends React.Component {
	state = {
		liked: false,
	}

	likeButton = () => {
		let liked = this.state.liked
		liked = !this.state.liked
		this.setState({liked: liked})
	}

	render() {
		return (<div className="thumbnail">
		<h3>{this.props.title}</h3>
		<small>{this.props.location}</small>
		<h4>{this.props.price}</h4>
		<button onClick={this.likeButton} className={
			this.state.liked ? "liked" : ''
		}>Like</button>
		</div>)
	}
}

export default Thumbnail;
