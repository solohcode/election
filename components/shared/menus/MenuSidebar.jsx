import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../store/auth/action';

const MenuSidebar = () => {
	const router = useRouter();
	const [data, setData] = useState({})
	const dispatch = useDispatch()
	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("electionData"))
		setData(user)
	}, [])

	const handleLogout =() =>{
		dispatch(logOut())
	}
	const menuItems = [
		{
			text: 'Dashboard',
			url: '/dashboard',
			icon: '/svg/home.svg',
			role:['admin', 'agent']
		},
		{
			text: 'Agent Form',
			url: '/agents',
			icon: '/svg/agent-form.svg',
			role:['admin', 'agent']
		},
		{
			text: 'Voting Exercise',
			url: '/voting',
			icon: '/svg/voting.svg',
			role:['admin', 'agent']
		},
		{
			text: 'Reports',
			url: '/reports',
			icon: '/svg/report.svg',
			role:['admin', 'agent']
		},
		{
			text: 'Settings',
			url: '/settings',
			icon: '/svg/settings.svg',
			role:['admin', 'agent']
		},
		// {
		// 	text: 'States',
		// 	url: '/states',
		// 	icon: 'icon-speed-medium',
		// 	role:["admin"]
		// },
		// {
		// 	text: 'All Agent',
		// 	url: '/agents',
		// 	icon: '/svg/home.svg',
		// 	role:["admin"]
		// },
		// {
		// 	text: 'Polling Units',
		// 	url: '/polling-units',
		// 	icon: '/svg/home.svg',
		// 	role:['admin']
		// },
	];

	return (
		<ul className="menu">
			{menuItems.map((item, index) => {
				if(data && !item.role.includes(data.user_type)){
					return null
				}
				return(
					<li
						key={index}
						className={router.pathname === item.url ? 'active' : ''}
					>
						<Link href={item.url}>

							<span><img src={item.icon} /></span>
							{item.text}
						</Link>
					</li>
			)})}
			<li >
				<a onClick={()=>handleLogout()}>
					<span><img src='/svg/logout.svg' /></span>
					Logout
				</a>
			</li>
		</ul>
	);
};

export default MenuSidebar;
