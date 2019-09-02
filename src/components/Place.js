import React from 'react'
import '../styles/Place.css'


class Place extends React.Component {
	state = {
		images : [
			'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
			'https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223171.jpg',
			'https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223174.jpg',
			'https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223178.jpg'
		]
	}

	// componentDidMount() {
	// 	this.setState({
	// 		backgroundImage: 'url(' + this.state.images[0] + ')'
	// 	})
	// }

	render () {
		return (
			<div className='main'>
				<div className='bigImg' style={{backgroundImage : 'url(' + this.state.images[0] + ')'}}></div>
				<div className='gallery'>
				{
					this.state.images.map((e,i) => <div className='smallImg' style={{backgroundImage : 'url(' + this.state.images[i] + ')'}}></div>)
				}
				</div>
			</div>
		)
	}
}

export default Place;
