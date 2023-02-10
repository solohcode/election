import React from 'react';
import { Col, Row } from 'reactstrap';
import ContainerDashboard from '../components/layouts/ContainerDashboard';

const Index = () => {

	return (
		<ContainerDashboard title="General Election Statistics" icon='/svg/voting-green.svg'>
			<div className='voting-card'>
				<Row>
					<Col sm={12} lg={8} md={8}>
						<div className='shadow-box'>
							<h5>2019 Presidential  - Winner</h5>
							<Row>
								<Col sm={12} lg={4} md={4}>
									<div className='winner-box'>
										<img src='/logo.png' alt='winner' />
										<h6 className='text'>15,346,466</h6>
									</div>
								</Col>
								<Col sm={6} lg={2} md={2}>
									<div className='runner-up-box'>
										<img src='/pdp-logo.png' alt='winner' />
										<h6 className='text'>106,000</h6>
									</div>
								</Col>
								<Col sm={6} lg={2} md={2}>
									<div className='runner-up-box'>
										<img src='/pdp-logo.png' alt='winner' />
										<h6 className='text'>106,000</h6>
									</div>
								</Col>
								<Col sm={6} lg={2} md={2}>
									<div className='runner-up-box'>
										<img src='/pdp-logo.png' alt='winner' />
										<h6 className='text'>106,000</h6>
									</div>
								</Col>
							</Row>
						</div>
					</Col>
					<Col sm={12} lg={4} md={4}>
						<div className='shadow-box'>
							<h5>Total Vote</h5>
							<h2>00,000,000</h2>
							<h5>Difference</h5>
							<h2>00,000,000</h2>
						</div>
					</Col>
				</Row>

				<div className='stat-summary'>
					<h6 className='title'>Statistical  Summary</h6>
					<hr />
					<div className='result-box'>
						<div className="result">
							<span>Total Number of Registered Voters</span>
							<span>84,004,084</span>
						</div>
						<div className="result">
							<span>Total Number of Registered Voters</span>
							<span>84,004,084</span>
						</div>
						<div className="result">
							<span>Total Number of Registered Voters</span>
							<span>84,004,084</span>
						</div>
						<div className="result">
							<span>Total Number of Registered Voters</span>
							<span>84,004,084</span>
						</div>
						<div className="result">
							<span>Total Number of Registered Voters</span>
							<span>84,004,084</span>
						</div>
					</div>
				</div>
				<div className="d-flex justify-content-center">
					<img src="/line.png" alt="line" className='line' />
				</div>
			</div>
			<div className='buttons'>
			<Row>
				<Col sm={12} lg={4} md={4}>
					<div className="button green">Create Data</div>
				</Col>
				<Col sm={12} lg={4} md={4}>
					<div className="button red">Edit Data</div>
				</Col>
				<Col sm={12} lg={4} md={4}>
					<div className="button blue">Delete Data</div>
				</Col>
			</Row>
			</div>
		</ContainerDashboard>
	);
};

export default Index;
