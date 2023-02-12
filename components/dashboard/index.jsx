// import { Table } from 'antd';
import React, { useEffect } from 'react'
import { Col, Row } from 'reactstrap';
import CardStatics from '../shared/cards/CardStatics';
import { toggleDrawerMenu } from '../../store/app/action';
import { connect, useDispatch } from 'react-redux';
import 'react-responsive-modal/styles.css';
import Modal from 'react-responsive-modal';
import Link from 'next/link';
import { checkUserUpdate } from '@/store/agent/action';

const Dashboard = ({isUserUpdated}) => {
  const dispatch = useDispatch();

	useEffect(() => {
		dispatch(toggleDrawerMenu(false));
    dispatch(checkUserUpdate());
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
      <Modal open={isUserUpdated} onClose={() => {}} center>
        <div className="modal-card">
          <img src="/svg/agent-form.svg" alt="form" width={100} height={100} />
          <span>Complete</span>
          <h6 className="text">Agent Form</h6>
          <Link href='/agent'>
            <img src="/svg/circle-arrow.svg" alt="circle-arrow" className='img' />
          </Link>
        </div>
      </Modal>
    </Row>
	)
}

const mapStateToProps = ({ dispatch, agent }) => ({
	dispatch,
	isUserUpdated: agent.isUserUpdated,
})

export default connect(mapStateToProps)(Dashboard)
