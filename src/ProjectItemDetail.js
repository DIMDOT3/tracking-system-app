import React, {Component} from 'react';
import './ProjectItemDetail.css';

const ProjectItemDetail = ({itemDetails, showItemDetail}) => {
	const itemKeys = Object.keys(itemDetails);
	return (
	<div className='item-detail-container'>
		<div className='item-detail-inner'>
			<form>
				<div className="form-row">
			    <div className='col-md-3'>
			    	<label for="date-received">Date Received</label>
			    	<input type="text" className="form-control" id="date-received" defaultValue={itemDetails.dateReceived} />
			  	</div>
			  	<div className='col-md-3'>
			    	<label for="date-received">Date Returned</label>
			    	<input type="text" className="form-control" id="date-received" defaultValue={itemDetails.dateReturned} />
			  	</div>
			  	<div className='col-md-3'>	
			  		<label for="account">Account</label>
			    	<input type="text" className="form-control" id="account" defaultValue={itemDetails.account} />
			  	</div>
			  	<div className='col-md-3'>	
			  		<label for="account-sub">Sub Account</label>
			    	<input type="text" className="form-control" id="account-sub" defaultValue={itemDetails.accountSub} />
			  	</div>
			  </div>
			  <div className="form-row">
			  	<div className='col-md-4'>
			    	<label for="po">PO#</label>
			    	<input type="text" className="form-control" id="po" defaultValue={itemDetails.po} />
			  	</div>
			  	<div className='col-md-4'>	
			  		<label for="invoice">Invoice #</label>
			    	<input type="text" className="form-control" id="invoice" defaultValue={itemDetails.invoice} />
			  	</div>
			  	<div className='col-md-4'>	
			  		<label for="location">Repair Location</label>
			    	<input type="text" className="form-control" id="location" defaultValue={itemDetails.location} />
			  	</div>
			  </div>
			  <div className="form-row">
			  	<div className='col-md-3'>
			    	<label for="manufacturer">Manufacturer</label>
			    	<input type="text" className="form-control" id="manufacturer" defaultValue={itemDetails.manufacturer} />
			  	</div>
			  	<div className='col-md-2'>
			    	<label for="catalog-number">Catalog #</label>
			    	<input type="text" className="form-control" id="catalog-number" defaultValue={itemDetails.catalogNumber} />
			  	</div>
			  	<div className='col-md-2'>
			    	<label for="serial-number">Serial #</label>
			    	<input type="text" className="form-control" id="serial-number" defaultValue={itemDetails.serialNumber} />
			  	</div>
			  	<div className='col-md-5'>
			    	<label for="description">Description</label>
			    	<input type="text" className="form-control" id="description" defaultValue={itemDetails.description} />
			  	</div>
			  </div>
			  <div className="form-group">
			    <label for="notes">Notes</label>
			    <textarea className="form-control" id="notes" rows="3" defaultValue={itemDetails.notes}></textarea>
			  </div>
			  <div>
			  	<button className='btn btn-warning'>Update</button>
			  	<button className='btn btn-primary' onClick={showItemDetail}>Close</button>
			  </div>
			</form>
		</div>
	</div>
	);
};

export default ProjectItemDetail;




