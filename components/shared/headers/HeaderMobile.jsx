import { MenuFoldOutlined } from '@ant-design/icons';
import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { toggleDrawerMenu } from '../../../store/app/action';

const HeaderMobile = ({ isDrawerMenu }) => {
    const dispatch = useDispatch();
	
    const handleOpenDrawer = () => {
			dispatch(toggleDrawerMenu(true));
    };
    return (
			<header className="header--mobile">
				<div className="header__left">
					<button className="ps-drawer-toggle" onClick={handleOpenDrawer}>
						<MenuFoldOutlined />
					</button>
					{/* <img src="" alt="" /> */}
				</div>
				<div className="header__center">
					<a className="ps-logo" href="#">
						<img src='/logo.png' alt='logo' width={50} height={50} />
						{/* <span>Election Updates</span> */}
					</a>
				</div>
				
				{/* <div className="header__right">
					<a className="header__site-link" href="#">
						<i className="icon-exit-right"></i>
					</a>
				</div> */}
			</header>
    );
};

export default connect((state) => state.app)(HeaderMobile);
