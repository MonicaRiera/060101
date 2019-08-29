import React from 'react';
import '../styles/Places.css'
import Favorites from './Favorites'
import Thumbnail from './Thumbnail'

class Places extends React.Component {
	state = {
		places: [
			{title:'Luxury Villa Indu Siam', price:350, location:'Koh Samui, Thailand'},
			{title:'Villa Kelusa', price:400, location:'Bali, Indonesia'},
			{title:'Tropical Architecture', price:100, location:'Koh Samui, Thailand'},
			{title:'El Alma', price:1590, location:'Papagayo, Costa Rica'},
			{title:'Villa Metisse', price:1230, location:'Tamarindo, Costa Rica'},
			{title:'Laemsingh Villa', price:210, location:'Phuket, Thailand'},
		]
	}
	render() {
		return (
			<div>
			<h1>{this.state.places.length} places</h1>
			<Favorites />
			<div className="thumbnails">
			{
				this.state.places.map((e, i) => <Thumbnail title={e.title} price={e.price} location={e.location} key={i}/>)
			}
			</div>
			</div>)
	}
}

export default Places;
