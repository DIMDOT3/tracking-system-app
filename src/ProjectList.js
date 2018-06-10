import React, { Component } from 'react';
import './ProjectList.css';
import { connect } from 'react-redux';

// components
import ProjectItem from './ProjectItem';
import ProjectItemDetail from './ProjectItemDetail';
import ProjectForm from './ProjectForm';

class ProjectList extends Component {
  constructor(props){
    super(props);
    this.state = {
      formIsHidden: true,
      itemDetailIsHidden: true,
      projectItemDetail: {}
    }
  };

  removeProject = (id) => {
    this.props.dispatch({
      type: 'REMOVE_PROJECT',
      id
    })
  };

  toggleHidden = () => {
    this.setState({
      formIsHidden: !this.state.formIsHidden
    })
  };

  showItemDetail = (project) => {
    this.setState({
      projectItemDetail: project,
      itemDetailIsHidden: !this.state.itemDetailIsHidden
    });
  };

	render(){
		const projectsList = this.props.projects.map((project) => {
      return(
        <ProjectItem 
          removeProject={this.removeProject.bind(this, project.id)} 
          project={project} 
          key={project.id} 
          showItemDetail={this.showItemDetail}
        />
      );
    });
		return(
      <div>
        <header className='flex'>
          <h1>Project Log</h1>
          <button 
            className='btn btn-primary'
            onClick={this.toggleHidden}
          >Add Project</button>
        </header>
        {!this.state.formIsHidden && <ProjectForm {...this.props} />}
  			<table>
          <thead>
            <tr>
              <th></th>
              <th>DATE RECEIVED</th>
              <th>PO</th>
              <th>LOCATION</th>
              <th>MANUFACTURER</th>
              <th>CATALOG #</th>
              <th>SERIAL #</th>
              <th>DESCRIPTION</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {projectsList}
          </tbody>
        </table>
        {!this.state.itemDetailIsHidden && <ProjectItemDetail 
          itemDetails={this.state.projectItemDetail}
          showItemDetail={this.showItemDetail} 
        />}
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

