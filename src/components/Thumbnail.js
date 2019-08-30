import React from 'react';
import '../styles/Thumbnail.css'

class Thumbnail extends React.Component {
	state = {
		place : this.props.place,
		likeButton: this.props.likeButton
	}

	componentWillReceiveProps(props) {
		this.setState({place: props.place})
	}

	render() {
		return (<div className="thumbnail">
		<h3>{this.state.place.title}</h3>
		<small>{this.state.place.location}</small>
		<h4>{this.state.place.price}</h4>
		<button onClick={() => this.state.likeButton(this.state.place)} className={
			this.state.place.liked ? "liked" : ''
		}>Like</button>
		</div>)
	}
}

export default Thumbnail;
