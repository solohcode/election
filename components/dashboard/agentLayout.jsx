import React from 'react'
import { Col, Row } from 'reactstrap';
import CardRecentOrders from '../shared/cards/CardRecentOrders';
import CardStatics from '../shared/cards/CardStatics';

const AgentLayout = ({analytics, members, memberLoading, data}) => {
	return (
		<div>
			<Row>
				<Col sm={6} lg={3} md={3}>
					<CardStatics url="/members" icon="users" color="yellow" name="Members" isCurrency={false} count={analytics.members} />
				</Col>
				<Col sm={6} lg={3} md={3}>
					<CardStatics url="orders" icon="cart-full" color="pink" name="Completed Orders" isCurrency={false} count={analytics.completedOrders} />
				</Col>
				<Col sm={6} lg={3} md={3}>
					<CardStatics url="orders" icon="cart-exchange" color="green" name="Ongoing Orders" isCurrency={true} count={analytics.ongoingOrders} />
				</Col>
				<Col sm={6} lg={3} md={3}>
					<CardStatics url="orders" icon="cart-empty" color="orange" name="Pending Orders" isCurrency={true} count={analytics.pendingOrders} />
				</Col>
			</Row>
			<CardRecentOrders data={members} className="mt-5" loading={memberLoading} acct_type={data && data.acct_type} />
		</div>
	)
}

export default AgentLayout
