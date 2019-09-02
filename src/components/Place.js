import React from 'react'
import '../styles/Place.css'


class Place extends React.Component {
	state = {
		images : [
			{image: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg', selected: true},
			{image: 'https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223171.jpg', selected: false},
			{image: 'https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223174.jpg', selected: false},
			{image: 'https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223178.jpg', selected: false}
		],

		backgroundImg : ''
	}

	changeImage = (index) => {
		let img = this.state.backgroundImg
		let images = this.state.images
		img = images[index].image
		images.forEach((e, i) => {
			i === index ? e.selected = true : e.selected = false
		})
		this.setState({
			backgroundImg: img,
			images: images
		})
	}

	componentWillMount() {
		this.setState({backgroundImg: this.state.images[0].image})
	}

	render () {
		return (
			<div className='main'>
				<div className='bigImg' style={{backgroundImage : 'url(' + this.state.backgroundImg + ')'}}></div>
				<div className='gallery'>
				{
					this.state.images.map((e,i) =>
					<div className={this.state.images[i].selected ? 'smallImg selected' : 'smallImg'} key={i}
					style={{backgroundImage : 'url(' + this.state.images[i].image + ')'}}
					onClick={() => this.changeImage(i)}></div>)
				}
				</div>
			</div>
		)
	}
}

export default Place;
