import React, {Component} from 'react';
import './ProjectItemDetail.css';

const ProjectItemDetail = ({itemDetails, showItemDetail}) => (
	<div className='item-detail-container'>
		<div className='item-detail-inner'>
			<p>Date Received: {itemDetails.dateReceived}</p>
			<p>PO#: {itemDetails.po}</p>
			<p>Location: {itemDetails.location}</p>
			<p>Manufacturer: {itemDetails.manufacturer}</p>
			<p>Catalog #: {itemDetails.catalogNumber}</p>
			<p>Serial #: {itemDetails.serialNumber}</p>
			<p>Description: {itemDetails.description}</p>
			<p>Notes: {itemDetails.notes}</p>
			<button onClick={showItemDetail}>Close</button>
		</div>
	</div>
);

export default ProjectItemDetail;




