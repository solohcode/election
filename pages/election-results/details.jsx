import React, { useEffect, useState } from 'react';
// import HeaderDashboard from '@/components/shared/headers/HeaderDashboard';
import { connect, useDispatch } from 'react-redux';
import { toggleDrawerMenu } from '@/store/app/action';
import { Table, Tabs, Select } from 'antd';
// import Link from 'next/link';
import { useRouter } from 'next/router';
import { getAggregateResults } from '@/store/result/action';
import { getAllParties } from '@/store/party/action';
import ContainerDashboard from '@/components/layouts/ContainerDashboard';

const ResultDetails = ({loading, aggregateResult, parties}) => {
	const { Option } = Select;
	const router = useRouter();
	const { tab } = router.query
	const dispatch = useDispatch();
	const [key, setKey] = useState('lagWest');
	const [electionType, setElectionType] = useState('presidential');
	useEffect(() => {
		setKey(tab);
		dispatch(toggleDrawerMenu(false));
	}, [tab]);
	
	useEffect(() => {
		if(tab){
			dispatch(getAggregateResults(`results-aggregator?type=${electionType}&by=${key}`));
		}
	}, [key, electionType])

	useEffect(() => {
		dispatch(getAllParties('party'));
	}, [])

	const p = parties.map(el => {
		return {
			title: el.logo,
			dataIndex: el.name,
			key: el.name,
			width: 50
		}
	})

	const lgatable = [
		{
			title: 'Lga',
			dataIndex: 'lga',
			key: 'lga',
			width: 100,
			fixed: 'left',
		},
		...p
	];

	const wardtable = [
		{
			title: 'Ward',
			dataIndex: 'ward',
			key: 'ward',
			width: 100,
			fixed: 'left',
		},
		...p
	];

	const putable = [
		{
			title: 'Polling Unit',
			dataIndex: 'pu',
			key: 'pu',
			width: 150,
			fixed: 'left',
		},
		...p
	];

	const table = [
		{
			title: 'Sen. District',
			dataIndex: 'dist',
			key: 'dist',
			width: 100,
			fixed: 'left',
		},
		...p,
	];

	const onTabChange = (k) => {
		setKey(k);
		// dispatch(getAggregateResults(`results-aggregator?type=${electionType}&by=${k}`));
	};


	return (
		<ContainerDashboard title="Polling Unit Results">
			<div className="mb-5">
				<Select placeholder="Select election type" onChange={(e) => setElectionType(e)}>
					<Option value="presidential">Presidential Election</Option>
					<Option value="governor">Governorship Election</Option>
					<Option value="assembly">Assembly Election</Option>
					<Option value="senate">Senetaor Election</Option>
					<Option value="representative">Representative Election</Option>
				</Select>
			</div>
				<Tabs
					defaultActiveKey={key}
					onChange={onTabChange}
					type="card"
				>
					<Tabs.TabPane tab="Sen. District" key="lagWest">
						<div className='table-width'>
							<Table
								pagination={false}
								columns={table}
								dataSource={aggregateResult}
								rowKey="id"
								scroll={{
									x: 1500, y: 500
								}}
								loading={loading}
							/>
						</div>
					</Tabs.TabPane>
					<Tabs.TabPane tab="Local Govt." key="lga">
						<div className='table-width'>
							<Table
								pagination={false}
								columns={lgatable}
								dataSource={aggregateResult}
								rowKey="id"
								scroll={{
									x: 1500, y: 500
								}}
								loading={loading}
							/>
						</div>
					</Tabs.TabPane>
					<Tabs.TabPane tab="Wards" key="ward">
						<div className='table-width'>
							<Table
								pagination={false}
								columns={wardtable}
								dataSource={aggregateResult}
								rowKey="id"
								scroll={{
									x: 1500, y: 500
								}}
								loading={loading}
							/>
						</div>
					</Tabs.TabPane>
					<Tabs.TabPane tab="Polling Units" key="pollingUnit">
						<div className='table-width'>
							<Table
								columns={putable}
								dataSource={aggregateResult}
								rowKey="id"
								scroll={{
									x: 1500, y: 500
								}}
								loading={loading}
							/>
						</div>
					</Tabs.TabPane>
				</Tabs>
		</ContainerDashboard>
	);
};

const mapStateToProps = ({dispatch, result, party}) =>({
	dispatch,
	loading: result.loading,
	parties: party.parties,
	aggregateResult: result.aggregateResult,
})

export default connect(mapStateToProps)(ResultDetails);
