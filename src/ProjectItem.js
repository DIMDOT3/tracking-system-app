import React from 'react';
import './ProjectItem.css';

const ProjectItem = ({ project }) => (
	<tr>
	  <td>{project.dateReceived}</td>
	  <td>{project.po}</td>
	  <td>{project.location}</td>
	  <td>{project.manufacturer}</td>
	  <td>{project.catalogNumber}</td>
	  <td>{project.serialNumber}</td>
	  <td>{project.description}</td>
	</tr>
);

export default ProjectItem;

