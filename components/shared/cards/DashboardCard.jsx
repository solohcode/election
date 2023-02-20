import Link from 'next/link';
import React from 'react';

const DashboardCard = ({ name, color, icon, url}) => (
			<Link href={url}>
				<div className={`ps-block--stat ${color} my-3`} >
					<div className="ps-block__left">
						<span>
							<img src={`/${icon}`} />
						</span>
					</div>
					<div className="ps-block__content">
						<p style={{color:"#000", fontWeight:"bolder"}}>{name}</p>
					</div>
				</div>
			</Link>
);

export default DashboardCard;
