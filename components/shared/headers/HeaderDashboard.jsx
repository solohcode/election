import React from 'react';
// import FormHeaderSearch from '~/components/shared/forms/FormHeaderSearch';

const HeaderDashboard = ({
	title = 'Welcome',
	icon,
}) => {
	return (
		<header className="header--dashboard">
			<div className="header__left">
				{/* {icon && <img src={icon} alt={icon} />} */}
				<span>{title}</span>
				<img src='/bar-line.png' alt="bar-line" />
			</div>
		</header>
	);
};

export default HeaderDashboard;
