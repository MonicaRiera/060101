import React from 'react'
import '../styles/Place.css'


class Place extends React.Component {
	state = {
		images : [
			'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
			'https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223171.jpg',
			'https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223174.jpg',
			'https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223178.jpg'
		],

		backgroundImg : ''
	}

	changeImage = (index) => {
		let img = this.state.backgroundImg
		let images = this.state.images
		img = images[index]
		this.setState({backgroundImg: img})
	}

	componentWillMount() {
		this.setState({backgroundImg: this.state.images[0]})
	}

	render () {
		return (
			<div className='main'>
				<div className='bigImg' style={{backgroundImage : 'url(' + this.state.backgroundImg + ')'}}></div>
				<div className='gallery'>
				{
					this.state.images.map((e,i) =>
					<div className='smallImg' key={i} 
					style={{backgroundImage : 'url(' + this.state.images[i] + ')'}} onClick={() => this.changeImage(i)}></div>)
				}
				</div>
			</div>
		)
	}
}

export default Place;
