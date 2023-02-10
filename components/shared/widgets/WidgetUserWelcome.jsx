// import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../../store/auth/action';

const WidgetUserWelcome = (props) => {
	
	const [data, setData] = useState({})
	useEffect(() => {
		const adminData = JSON.parse(localStorage.getItem("electionData"))
		setData(adminData)
	}, [])

	const handleLogout =() =>{
		props.dispatch(logOut())
	}

	return (
        <div className="ps-block--user-wellcome">
            <div className="ps-block__left">
                <img style={{width:50, height:50}} src="/img/user/1.png" alt="" />
            </div>
            <div className="ps-block__right">
                <p>
                    Hello,<a href="#">{data && data.fullname}</a>
                </p>
            </div>
            <div className="ps-block__action">
				<a href="#" onClick={()=>handleLogout()}>
					<i className="icon-exit"></i>
				</a>
            </div>
        </div>
    );
};

export default connect((state) => state.app)(WidgetUserWelcome);
