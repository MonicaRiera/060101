import React from 'react'
import '../styles/Search.css'

class Search extends React.Component {

	render () {
		return <input type="text" placeholder="Search..." onKeyUp={(e) => this.props.searchFilter(e)}/>
	}
}

export default Search;
