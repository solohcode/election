import React from 'react';

const CardStatics = ({name, icon, decription}) => (
    
	<div className='ps-card'>
		<div className='card-head'>
			<h6>{name}</h6>
			<img src={`/svg${icon}`} alt={icon} />
		</div>
		<span>{decription}</span>
	</div>
);

export default CardStatics;
