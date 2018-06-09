import React from 'react';
import './ProjectItem.css';

const ProjectItem = ({ project, removeProject }) => (
	<tr>
		<td>
			<a onClick={() => alert('hello!')}><i class="fas fa-info-circle"></i></a>
		</td>
	  <td>{project.dateReceived}</td>
	  <td>{project.po}</td>
	  <td>{project.location}</td>
	  <td>{project.manufacturer}</td>
	  <td>{project.catalogNumber}</td>
	  <td>{project.serialNumber}</td>
	  <td>{project.description}</td>
	  <td>
	  	<a onClick={removeProject}>
	  		<i class="fas fa-trash-alt"></i>
			</a>
  	</td>
	</tr>	
);

export default ProjectItem;

