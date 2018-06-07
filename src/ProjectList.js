import React, { Component } from 'react';
import './Navbar.css';
import { connect } from 'react-redux';

// components
import ProjectItem from './ProjectItem';

class ProjectList extends Component {
  constructor(props){
    super(props);
    this.state = {
      dateReceived: Date.now(),
      po: '',
      location: '' ,
      manufacturer: '',
      catalogNumber: '',
      serialNumber: '',
      description: '',
      completed: false
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'ADD_PROJECT',
      project: this.state
    });
    event.target.reset();
  };



	render(){
		const projectsList = this.props.projects.map((project) => {
      return(
        <ProjectItem project={project} key={project.id} />
      );
    });
		return(
      <div>
        <h1>Project Log</h1>
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
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='po'>PO#</label>
          <input type='text' name='po' id='po' onChange={this.handleChange} />
          <label htmlFor='location'>Location</label>
          <input type='text' name='location' id='location' onChange={this.handleChange} />
          <label htmlFor='manufacturer'>Manufacturer</label>
          <input type='text' name='manufacturer' id='manufacturer' onChange={this.handleChange} />
          <label htmlFor='catalogNumber'>Catalog #</label>
          <input type='text' name='catalogNumber' id='catalogNumber' onChange={this.handleChange} />
          <label htmlFor='serialNumber'>Serial #</label>
          <input type='text' name='serialNumber' id='serialNumber' onChange={this.handleChange} />
          <label htmlFor='description'>Description</label>
          <input type='text' name='description' id='description' onChange={this.handleChange} />
          <button className='btn btn-primary'>Add Project</button>
        </form>
      </div>
		);
	}
};

function mapStateToProps(reduxState){
  return {
    projects: reduxState.projects
  };
}

export default connect(mapStateToProps)(ProjectList);

