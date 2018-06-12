import React, { Component} from 'react';
import './ProjectForm.css';

class ProjectForm extends Component {
	constructor(props){
		super(props);
		this.state = {
      dateReceived: '',
      po: '',
      location: '' ,
      manufacturer: '',
      catalogNumber: '',
      serialNumber: '',
      description: '',
      completed: false
    }
	}

	handleChange = (event) => {
    let newDate = new Date().toString();
    this.setState({
      [event.target.name]: event.target.value,
      dateReceived: newDate
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
		return (
			<form className='project-form-outer' onSubmit={ this.handleSubmit }>
        <div className='project-form-inner'>
          <label htmlFor='po'>PO#</label>
          <input type='text' name='po' id='po' onChange={this.handleChange} />
          <label htmlFor='location'>Location</label>
          <input type='text' name='location' id='location' onChange={this.handleChange} />
        </div>
        <div className='project-form-inner'>
          <div>
          <label htmlFor='manufacturer'>Manufacturer</label>
          <br />
          <input type='text' name='manufacturer' id='manufacturer' onChange={this.handleChange} />
          </div>
          <label htmlFor='catalogNumber'>Catalog #</label>
          <input type='text' name='catalogNumber' id='catalogNumber' onChange={this.handleChange} />
          <label htmlFor='serialNumber'>Serial #</label>
          <input type='text' name='serialNumber' id='serialNumber' onChange={this.handleChange} />
          <label htmlFor='description'>Description</label>
          <input type='text' name='description' id='description' onChange={this.handleChange} />
        </div>
        <div className='project-form-inner'>
          <label htmlFor='notes'>Notes</label>
          <textarea name='notes' id='notes'></textarea>
        </div>
        <button className='btn btn-primary'>Add Project</button>
      </form>
		)
	}
}

export default ProjectForm;

