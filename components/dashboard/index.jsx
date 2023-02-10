// import { Table } from 'antd';
import React, { useEffect } from 'react'
import { Col, Row } from 'reactstrap';
import CardStatics from '../shared/cards/CardStatics';
import { toggleDrawerMenu } from '../../store/app/action';
import { useDispatch } from 'react-redux';

const Dashboard = () => {
	// const [data, setData] = useState({})
  const dispatch = useDispatch();

	useEffect(() => {
		// const d = JSON.parse(localStorage.getItem("electionData"))
		// setData(d);
		dispatch(toggleDrawerMenu(false));
	}, []);

	return (
    <Row>
      <Col sm={12} lg={6} md={6} className="mt-2">
        <CardStatics
          url="/users"
          icon="/agent-form-green.svg"
          name="Agent Form"
          decription="Kindly add a synopsis of  this 
          item, so as to give a glimps of
          what is all about."
        />
      </Col>
      <Col sm={12} lg={6} md={6} className="mt-2">
        <CardStatics
          url="/users"
          icon="/voting-green.svg"
          name="Voting Exercise"
          decription="Kindly add a synopsis of  this 
          item, so as to give a glimps of
          what is all about."
        />
      </Col>
      <Col sm={12} lg={6} md={6} className="mt-2">
        <CardStatics
          url="/users"
          icon="/report-green.svg"
          name="Reports"
          decription="Kindly add a synopsis of  this 
          item, so as to give a glimps of
          what is all about."
        />
      </Col>
      <Col sm={12} lg={6} md={6} className="mt-2">
        <CardStatics
          url="/users"
          icon="/settings-green.svg"
          name="Settings"
          decription="Kindly add a synopsis of  this 
          item, so as to give a glimps of
          what is all about."
        />
      </Col>
      <Col sm={12} lg={6} md={6} className="mt-2">
        <CardStatics
          url="/users"
          icon="/logout-green.svg"
          name="Logout"
          decription="Kindly add a synopsis of  this 
          item, so as to give a glimps of
          what is all about."
        />
      </Col>
    </Row>
	)
}


export default Dashboard
