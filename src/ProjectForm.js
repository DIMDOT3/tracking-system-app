import React, { Component} from 'react';
import moment from 'moment';
import './ProjectForm.css';

class ProjectForm extends Component {
	constructor(props){
		super(props);
		this.state = {
      dateReceived: '',
      account: '',
      accountSub: '',
      po: '',
      location: '' ,
      manufacturer: '',
      catalogNumber: '',
      serialNumber: '',
      description: '',
      notes: '',
      completed: false
    }
	}

	handleChange = (event) => {
    let newDate = moment().get().format('MM/DD/YYYY');
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
			<form className='project-form-container' onSubmit={ this.handleSubmit }>
        <div className="form-row">
          <div className='col-md-3'>
            <label htmlFor="date-received">Date Received</label>
            <input type="date" name='dateReceived' className="form-control" id="date-received" onChange={this.handleChange} />
          </div>
          <div className='col-md-2'>  
            <label htmlFor="account">Account</label>
            <input type="text" name='account' className="form-control" id="account" onChange={this.handleChange} />
          </div>
          <div className='col-md-2'>  
            <label htmlFor="account-sub">Sub Account</label>
            <input type="text" name='accountSub' className="form-control" id="account-sub" onChange={this.handleChange} />
          </div>
          <div className='col-md-2'>
            <label htmlFor="po">PO#</label>
            <input type="text" name='po' className="form-control" id="po" onChange={this.handleChange} />
          </div>
          <div className='col-md-3'>  
            <label htmlFor="location">Repair Location</label>
            <input type="text" name='location' className="form-control" id="location" onChange={this.handleChange} />
          </div>
        </div>
        <div className="form-row">
          <div className='col-md-3'>
            <label htmlFor="manufacturer">Manufacturer</label>
            <input type="text" name='manufacturer' className="form-control" id="manufacturer" onChange={this.handleChange} />
          </div>
          <div className='col-md-2'>
            <label htmlFor="catalog-number">Catalog #</label>
            <input type="text" name='catalogNumber' className="form-control" id="catalog-number" onChange={this.handleChange} />
          </div>
          <div className='col-md-2'>
            <label htmlFor="serial-number">Serial #</label>
            <input type="text" name='serialNumber' className="form-control" id="serial-number" onChange={this.handleChange} />
          </div>
          <div className='col-md-5'>
            <label htmlFor="description">Description</label>
            <input type="text" name='description' className="form-control" id="description" onChange={this.handleChange} />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="notes">Notes</label>
          <textarea name='notes' className="form-control" id="notes" rows="3" onChange={this.handleChange}></textarea>
        </div>
        <div>
          <button className='btn btn-primary'>Add Project</button>
        </div>
      </form>
		)
	}
}

export default ProjectForm;

