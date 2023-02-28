import { SearchOutlined } from '@ant-design/icons';
import { Input, Pagination, Select, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ContainerDashboard from '../components/layouts/ContainerDashboard';

const Index = ({reports, dispatch, total}) => {
  const [electionType, setElectionType] = useState('presidential')
	useEffect(() => {
    dispatch({
      type: 'report/ALL_RESULT',
      payload: {type: electionType, page: 1}
    })
	}, [electionType]);

	const table = [
		{
			title: 'AGENT  I.D',
			dataIndex: 'id',
			key: 'id',
			render: (text, data, dataIndex) => <strong>{dataIndex + 1}</strong>
		},
		{
			title: 'POLLING UNITS',
			dataIndex: 'polling_unit',
			key: 'polling_unit',
			render: (d) => <strong>{d.unit_name}</strong>
		},
		{
			title: 'ACCREDITATION',
			dataIndex: 'accredited',
			key: 'accredited',
		},
		{
			title: 'TOTAL VOTE CAST',
			dataIndex: 'score',
			key: 'score',
		},
		{
			title: 'VOID VOTE',
			dataIndex: 'void',
			key: 'void',
		},
		// {
		// 	title: 'Action',
		// 	dataIndex: 'party',
		// 	key: 'party',
		// 	render: (data) =>
		// 		<Button
		// 			onClick={() => updateResult(data, 'remove')}
		// 			type="danger"
		// 			icon={<DeleteOutlined />}
		// 			size="small"
		// 		/>
		// },
	];

	const handlePagination = (page, pageSize) => {
		dispatch({
      type: 'report/ALL_RESULT',
      payload: {type: electionType, page}
    })
	}

	return (
		<ContainerDashboard title="Unit Results" icon='/svg/report-green.svg'>
			<div className='d-flex justify-content-between px-5'>
				<div>
					<Space>
						<Select
							defaultValue="presidential"
							style={{
								width: 200,
							}}
							onChange={(e) => setElectionType(e)}
							options={[
								{
									value: 'presidential',
									label: 'Presidential',
								},
								{
									value: 'senator',
									label: 'Senetaor',
								},
								{
									value: 'governor',
									label: 'Governor',
								},
								{
									value: 'assembly',
									label: 'House of Assemblies',
								},
								{
									value: 'representative',
									label: 'House of Representative',
								},
							]}
						/>
						<Input prefix={<SearchOutlined className="site-form-item-icon" />} placeholder="Username" />
					</Space>
				</div>
				<div>
					<button className='transparent-btn'>Download CSV</button>
				</div>
			</div>
			<div className="m-3">
				<Table
					pagination={false}
					columns={table}
					dataSource={reports}
					rowKey="id"
				/>
			</div>
			
			<div className="mt-4">
				<Pagination
					total={total || 0}
					responsive={true}
					defaultCurrent={1}
					onChange={handlePagination}
					pageSize={10}
					showSizeChanger={false}
				/>
			</div>
		</ContainerDashboard>
	);
};

const mapStateToProps = ({ dispatch, report }) => ({
	dispatch,
	loading: report.loading,
	reports: report.results,
	total: report.total
})

export default connect(mapStateToProps)(Index);
