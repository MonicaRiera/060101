import React from 'react';
import '../styles/Thumbnail.css'

class Thumbnail extends React.Component {
	state = {
		liked: false,
	}

	likeButton = () => {
		this.setState({liked: !this.state.liked})
	}

	render() {
		return (<div className="thumbnail">
		<h3>{this.props.title}</h3>
		<small>{this.props.location}</small>
		<h4>{this.props.price}</h4>
		<button onClick={this.likeButton}>Like</button>
		</div>)
	}
}

export default Thumbnail;
