import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
	render(){
		return(
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
			  <a className="navbar-brand" href="/">Navbar</a>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>

			  <div className="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul className="navbar-nav mr-auto">
			      <li className="nav-item active">
			        <a href='#'>HomePage</a>
			      </li>
			      <li className="nav-item">
			        <a href='#'>Projects Log</a>
			      </li>
			      <li className="nav-item">
			        <a href='#'>Contacts</a>
			      </li>
			    </ul>
			  </div>
			</nav>
		)
	}
}

export default Navbar;



