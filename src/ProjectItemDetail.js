import React, {Component} from 'react';
import './ProjectItemDetail.css';

const ProjectItemDetail = ({itemDetails, showItemDetail}) => (
	<div className='item-detail-container'>
		<p>{itemDetails.po}</p>
		<p>{itemDetails.location}</p>
		<p>{itemDetails.manufacturer}</p>
		<button onClick={showItemDetail}>Close</button>
	</div>
);

export default ProjectItemDetail;




