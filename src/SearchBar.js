import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<form>
				<label>Search</label>
				<input type='text' />
				<button className='btn btn-primary'>Submit</button>
			</form>
		)
	}
}


export default SearchBar



