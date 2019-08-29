import React from 'react';
import '../styles/Thumbnail.css'

class Thumbnail extends React.Component {
	render() {
		return (<div className="thumbnail">
		<h3>{this.props.title}</h3>
		<small>{this.props.location}</small>
		<h4>{this.props.price}</h4>
		</div>)
	}
}

export default Thumbnail;
