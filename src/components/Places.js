import React from 'react';
import '../styles/Places.css'
import Favorites from './Favorites'
import Thumbnail from './Thumbnail'

class Places extends React.Component {
	state = {
		places: [
			{title:'Luxury Villa Indu Siam', price:350, location:'Koh Samui, Thailand', liked:false},
			{title:'Villa Kelusa', price:400, location:'Bali, Indonesia', liked:false},
			{title:'Tropical Architecture', price:100, location:'Koh Samui, Thailand', liked:false},
			{title:'El Alma', price:1590, location:'Papagayo, Costa Rica', liked:false},
			{title:'Villa Metisse', price:1230, location:'Tamarindo, Costa Rica', liked:false},
			{title:'Laemsingh Villa', price:210, location:'Phuket, Thailand', liked:false}
		]
	}

	likeButton = (place) => {
		let places = this.state.places
		places.forEach(p => {
			if (p.title === place.title) {
				p.liked = !p.liked
			}
		})
		this.setState({places: places})
	}

	render() {
		return (
			<div>
			<h1>{this.state.places.length} places</h1>
			<div className="thumbnails">
			{
				this.state.places.map((e, i) => <Thumbnail place={e} likeButton={this.likeButton} key={i}/>)
			}
			</div>
			<div className="thumbnails">
			<Favorites favorites={this.state.places.filter(p => p.liked)} likeButton={this.likeButton}/>
			</div>
			</div>)
	}
}

export default Places;
