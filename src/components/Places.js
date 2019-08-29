import React from 'react';

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
			<div className="thumbnails">
			{
				this.state.places.map((e, i) => <div className="thumbnail" key={i}><h3>{e.title}</h3><small>{e.location}</small><h4>{e.price}</h4></div>)
			}
			</div>
			</div>)
	}
}

export default Places;
