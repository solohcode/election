import React, { useEffect, useState } from 'react';
// import HeaderDashboard from '@/components/shared/headers/HeaderDashboard';
import { connect, useDispatch } from 'react-redux';
import { toggleDrawerMenu } from '@/store/app/action';
import { Table, Select } from 'antd';
import { getAggregateResults } from '@/store/result/action';
import { getAllParties } from '@/store/party/action';
import ContainerDashboard from '@/components/layouts/ContainerDashboard';

const ResultDetails = ({loading, aggregateResult, parties}) => {
	const { Option } = Select;
	const dispatch = useDispatch();
	const [electionType, setElectionType] = useState('presidential');

	useEffect(() => {
		dispatch(toggleDrawerMenu(false));
	}, []);
	
	useEffect(() => {
		// dispatch(getAggregateResults(`results-aggregator?type=${electionType}&by=pollingUnit`));
	}, [electionType])

	useEffect(() => {
		dispatch(getAllParties('party'));
	}, [])

	const p = parties.map(el => {
		return {
			title: el.logo,
			dataIndex: el.name,
			key: el.name,
		}
	})

	const putable = [
		{
			title: 'Polling Unit',
			dataIndex: 'pu',
			key: 'pu',
			width: 120,
			fixed: 'left',
		},
		...p
	];

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
