import React from 'react';
// import FormHeaderSearch from '~/components/shared/forms/FormHeaderSearch';

const HeaderDashboard = ({
    title = 'Welcome',
    icon,
}) => {
    return (
        <header className="header--dashboard">
            <div className="header__left">
                {icon && <img src={icon} alt={icon} />}
                <span>{title}</span>
            </div>
            <div className="header__center">
                {/* <FormHeaderSearch /> */}
            </div>
            {/* <div className="header__right">
                <a className="header__site-link" href="#">
                    <span>View your store</span>
                    <i className="icon-exit-right"></i>
                </a>
            </div> */}
        </header>
    );
};

export default HeaderDashboard;
