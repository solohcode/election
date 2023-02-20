import { logOut } from '@/store/auth/action';
import Router from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';
import ContainerDashboard from '../components/layouts/ContainerDashboard';

const Index = () => {
  const dispatch =  useDispatch();
	const handleLogout =() =>{
		dispatch(logOut())
	}
	return (
		<ContainerDashboard title="Logout" icon='/svg/logout-green.svg'>
      <div className="logout-card">
        <img src="/logo.png" alt="logo" />
        <hr />
        <span className="text">Do you wish to logout</span>
        <div className='group-btns'>
          <button className=' btns green-btn' onClick={handleLogout}>Yes</button>
          <button className='btns outline-black-btn' onClick={() => Router.push('/dashboard')}>No</button>
        </div>
      </div>
		</ContainerDashboard>
	);
};

export default Index;
