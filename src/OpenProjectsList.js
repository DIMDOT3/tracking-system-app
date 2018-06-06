import React, { Component } from 'react';
import './Navbar.css';

// components
import OpenProjectsItem from './OpenProjectsItem';

class OpenProjectsList extends Component {
	render(){
		const { currentProjects } = this.props;
		const projectsList = currentProjects.map((project, i) => {
      return(
        <OpenProjectsItem project={project} key={i} />
      );
    });
		return(
      <div>
        <h1>Open Projects</h1>
  			<table>
          <thead>
            <tr>
              <th>DATE RECEIVED</th>
              <th>PO</th>
              <th>LOCATION</th>
              <th>MANUFACTURER</th>
              <th>CATALOG #</th>
              <th>SERIAL #</th>
              <th>DESCRIPTION</th>
            </tr>
          </thead>
          <tbody>
            {projectsList}
          </tbody>
        </table>
      </div>
		);
	}
};

export default OpenProjectsList;

