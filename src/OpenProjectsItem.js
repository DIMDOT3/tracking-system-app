import React, { Component } from 'react';
import './OpenProjectsItem.css';

class OpenProjectsItem extends Component {
	render() {
		const { project } = this.props; 
		return (
			<tr>
	          <td>{project.dateReceived}</td>
	          <td>{project.PO}</td>
	          <td>{project.location}</td>
	          <td>{project.manufacturer}</td>
	          <td>{project.catalogNumber}</td>
	          <td>{project.serialNumber}</td>
	          <td>{project.description}</td>
	        </tr>
		);
	}
};

export default OpenProjectsItem;

