import { Table, Image } from 'antd';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap';
import CardStatics from '../shared/cards/CardStatics';
import { connect } from 'react-redux';
import { getDashboardAnalytics } from '../../store/dashboard/action';
import { toggleDrawerMenu } from '../../store/app/action';

const AdminLayout = ({analytics, loading, dispatch}) => {
	const [data, setData] = useState({})

	const table = [
		{
			title: 'Id',
			dataIndex: 'id',
			key: 'id',
			render: (text, data, dataIndex) => <strong>{dataIndex + 1}</strong>
		},
		{
			title: 'Paid in account',
			dataIndex: 'recieve_account',
			key: 'recieve_account',
			render: (text) => <p>{`${text.account_name} - ${text.account_number}`}</p>
		},
		{
			title: 'Exchange Amount',
			dataIndex: 'amount',
			key: 'amount',
		},
		{
			title: 'Amount in Naira',
			dataIndex: 'amount',
			render: (text, data) => <p>{text * (data?.rate?.rate || 1)}</p>
		},
		{
			title: 'Rate',
			dataIndex: 'rate',
			key: 'rate',
			render: (text) => <p>{text?.rate}</p>
		},
		{
			title: 'Payment proof',
			dataIndex: 'payment_evident',
			key: 'payment_evident',
			render: (text) => text.split('.').includes('pdf') ? (
				<a href={text}>Download file</a>
			) : (
				<Image width={100} src={text} alt='proof of payment' />
			)
		},
		{
			title: 'Date',
			dataIndex: 'createdAt',
			key: 'createdAt',
			render: text => <p>{new Date(text).toDateString()}</p>
		},
		{
			title: 'Reason',
			dataIndex: 'reason',
			key: 'reason',
		},
		{
			title: 'Status',
			dataIndex: 'status',
			key: 'status',
			render: text =>text === 'completed' ?
				<span className="ps-badge success">{text}</span> :
				<span className="ps-badge danger">{text}</span>
		},
	];
	const date = new Date().toISOString();

	useEffect(() => {
		const d = JSON.parse(localStorage.getItem("electionData"))
		setData(d);
		dispatch(getDashboardAnalytics('analytics'))
		dispatch(toggleDrawerMenu(false));
	}, []);

	return (
		<div>
			<Row>
				{data?.user_type !== 'customer' && (
					<Col sm={6} lg={3} md={3} className="mt-5">
						<CardStatics
							url="/users"
							icon="users"
							color="green"
							name="Users"
							isCurrency={false}
							tab={1}
							count={analytics.users}
						/>
					</Col>
				)}
				<Col sm={6} lg={3} md={3} className="mt-5">
					<CardStatics
						url="/orders"
						icon="cash-pound"
						color="orange"
						name="Total Trnx"
						isCurrency={true}
						tab={1}
						count={analytics?.totalTrnx ? analytics?.totalTrnx[0]?.count : 0}
					/>
				</Col>
				<Col sm={6} lg={3} md={3} className="mt-5">
					<CardStatics
						url="/orders"
						icon="cart-full"
						color="yellow"
						name="Total Order"
						isCurrency={false}
						tab={2}
						count={analytics.trnx}
					/>
				</Col>
				<Col sm={6} lg={3} md={3} className="mt-5">
					<CardStatics
						url="/orders"
						icon="cart-add"
						color="pink"
						name="Pending Trnx"
						isCurrency={true}
						tab={0}
						count={analytics?.pendingTrnx ? analytics?.pendingTrnx[0]?.count : 0}
					/>
				</Col>
			</Row>
			<div className="ps-card mt-5">
				<div className="ps-card__header">
					<a href="/orders?tab=delivered"><h4>Recent Transactions</h4></a>
				</div>
				<Table loading={loading} columns={table} dataSource={[]} rowKey="id" pagination={false}/>
			</div>
		</div>
	)
}

const mapStateToProps = ({dispatch, dashboard})=>({
	loading:dashboard.loading,
	analytics:dashboard.analytics,
	dispatch
})

export default connect(mapStateToProps)(AdminLayout)
