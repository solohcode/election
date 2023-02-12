import React, { useEffect, useState } from 'react';
// import ContainerDefault from '@/components/layouts/ContainerDefault';
// import FormSearchSimple from '@/components/shared/forms/FormSearchSimple';
// import HeaderDashboard from '@/components/shared/headers/HeaderDashboard';
import { connect, useDispatch } from 'react-redux';
import { toggleDrawerMenu } from '@/store/app/action';
import { Table, Space, Tooltip, Button, Modal, Form, Select, Pagination, Input } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { createAgent, getAgent } from '../../store/agent/action';
import { getPolingUnit } from '@/store/pollingunit/action';
import ContainerDashboard from '@/components/layouts/ContainerDashboard';

const AgentPage = ({loading, total, agents, pollingUnits}) => {
	const { Option } = Select;
	const [form] = Form.useForm();
	const [createModal, setCreateModal] = useState(false);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAgent('agent'));
		dispatch(getPolingUnit('polling-unit?type=all'));
		dispatch(toggleDrawerMenu(false));
	}, []);

	const onFinish = (values) =>{
		dispatch(createAgent({data: values, dispatch}))
		setCreateModal(false);
	}

	const table = [
		{
			title: 'Id',
			dataIndex: 'id',
			key: 'id',
			render: (text, data, dataIndex) => <strong>{dataIndex + 1}</strong>
		},
		{
			title: 'Full Name',
			dataIndex: 'fullname',
			key: 'fullname',
		},
		{
			title: 'Local Govt',
			dataIndex: 'polling_unit',
			key: 'polling_unit',
			render: (unitState) => <p>{unitState?.local_govt}</p>
		},
		{
			title: 'Ward',
			dataIndex: 'polling_unit',
			key: 'polling_unit',
			render: (unitState) => <p>{unitState?.ward}</p>
		},
		{
			title: 'Polling Unit',
			dataIndex: 'polling_unit',
			key: 'polling_unit',
			render: (unitState) => <p>{unitState?.unit}</p>
		},
		{
			title: 'Reg. Voters',
			dataIndex: 'polling_unit',
			key: 'polling_unit',
			render: (unitState) => <p>{unitState?.reg_voters}</p>
		},
		{
			title: 'Action',
			dataIndex: 'status',
			key: 'status',
			render: (text, data) =>
				<Space>
					<Tooltip title="upgrade user">
						<Button
							onClick={() => {}}
							type="primary"
							icon={<EditOutlined />}
							size="small"
						/>
					</Tooltip>
					<Tooltip title={text ? 'deactivate' : 'activate'} >
						<Button
							onClick={() => {}}
							type="danger"
							icon={<DeleteOutlined />}
							size="small"
						/>
					</Tooltip>
				</Space>
		},
	];

	const handlePagination = (page, pageSize) => {
		dispatch(getAgent(`agent?page=${page}`));
	}

	// const handleSearch = (e) => {
	// 	dispatch(getAgent(`agent?search=${e.target.value}`));
	// }

	return (
		<ContainerDashboard title="Agents">
			<section className="ps-items-listing">
				<div className="ps-section__header simple">
					<div className="ps-section__filter">
						{/* <FormSearchSimple handleSearch={handleSearch} /> */}
					</div>
					<div className="ps-section__actions mb-3">
						<a className="ps-btn success" href="#" onClick={() => setCreateModal(true)}>
							<i className="icon icon-plus mr-2" />
							Create Agent
						</a>
					</div>
				</div>
				<div className="ps-section__content">
					<Table
						pagination={false}
						loading={loading}
						columns={table}
						dataSource={agents}
						rowKey="id"
					/>
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
				</div>
			</section>
			{/* create user start */}
			<Modal
				title="Create New Agent"
				style={{ top: 20 }}
				open={createModal}
				centered
				footer={null}
				onCancel={() => setCreateModal(false)}
			>
				<Form onFinish={onFinish} form={form}>
					<Form.Item
						name="fullname"
						rules={[{ required: true, message: 'Please input your full name' }]}
					>
						<Input size="large" placeholder="Full name" />
					</Form.Item>
					<Form.Item
						name="email"
						rules={[{ required: true, message: 'Please input your e-mail address' }]}
					>
						<Input size="large" placeholder="Email" />
					</Form.Item>
					<Form.Item
						name="phone"
						rules={[{ required: true, message: 'Please input your phone number' }]}
					>
						<Input size="large" placeholder="Phone number" />
					</Form.Item>
					<Form.Item
						name="polling_unit"
						rules={[{ required: true, message: 'Please select polling unit' }]}
					>
						<Select
							showSearch
							placeholder="Select polling unit"
							optionFilterProp="children"
							filterOption={(input, option) => (option?.label ?? '').includes(input)}
							filterSort={(optionA, optionB) =>
								(optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
							}
							options={pollingUnits?.map((r) => (
								{
									value: r.id,
					        label: `${r.local_govt}-${r.ward}-${r.unit}`,
								}
							))}
						/>
					</Form.Item>
					<Form.Item
						name="password"
						rules={[{ required: true, message: 'Please input your password' }]}
					>
						<Input size="large" type="password" placeholder="Password" />
					</Form.Item>
					<Form.Item>
						<button className="ps-btn w-100 success">
							{loading?"submitting...":"Submit"}
						</button>
					</Form.Item>
				</Form>
			</Modal>
			{/* create user end */}
		</ContainerDashboard>
	);
};

const mapStateToProps = ({dispatch, agent, polling}) =>({
	dispatch,
	loading: agent.loading,
	total: agent.total,
	agents: agent.agents,
	pollingUnits: polling.pollingUnits
})

export default connect(mapStateToProps)(AgentPage);
