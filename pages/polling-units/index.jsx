import React, { useEffect, useState } from 'react';
// import ContainerDefault from '@/components/layouts/ContainerDefault';
// import FormSearchSimple from '@/components/shared/forms/FormSearchSimple';
// import HeaderDashboard from '@/components/shared/headers/HeaderDashboard';
import { connect, useDispatch } from 'react-redux';
import { toggleDrawerMenu } from '@/store/app/action';
import { Table, Space, Tooltip, Button, Modal, Form, Select, Pagination, Input } from 'antd';
import { getAdmin } from '@/store/admin/action';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
// import { upgradeUser } from '../../store/admin/action';
import { createPollingUnit, getPolingUnit } from '@/store/pollingunit/action';
import { getAllStates } from '@/store/states/action';
import ContainerDashboard from '@/components/layouts/ContainerDashboard';

const PollingUnitPage = ({loading, total, pollingUnits, states}) => {
	const { Option } = Select;
	const [form] = Form.useForm();
	// const {confirm} = Modal;
	const [unitId, setUnitId] = useState(null);
	const [createModal, setCreateModal] = useState(false);
	const [editModal, setEditModal] = useState(false);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getPolingUnit('polling-unit'));
		dispatch(getAllStates('states'));
		dispatch(toggleDrawerMenu(false));
	}, []);

	const onFinish = (values) =>{
		dispatch(createPollingUnit({data: values, dispatch}))
		setCreateModal(false);
	}

	const onFinishEdit = (values) =>{
		dispatch({
      type: 'EDIT_POLLING_UNIT',
      payload: {data: {...values, id: unitId}, dispatch}
    })
		setEditModal(false);
	}

	const table = [
		{
			title: 'Id',
			dataIndex: 'id',
			key: 'id',
			render: (text, data, dataIndex) => <strong>{dataIndex + 1}</strong>
		},
		{
			title: 'State',
			dataIndex: 'state',
			key: 'state',
			render: (d) => <strong>{d || 'Lagos'}</strong>
		},
		{
			title: 'Local Govt',
			dataIndex: 'local_govt',
			key: 'local_govt',
		},
		{
			title: 'Ward',
			dataIndex: 'ward',
			key: 'ward',
		},
		{
			title: 'Polling Unit',
			dataIndex: 'unit',
			key: 'unit',
		},
		{
			title: 'Reg. Voters',
			dataIndex: 'reg_voters',
			key: 'reg_voters',
		},
		{
			title: 'Action',
			dataIndex: 'id',
			key: 'id',
			render: (text) =>
				<Space>
					<Tooltip title="Edit">
						<Button
							onClick={() => {
								setEditModal(true);
								setUnitId(text);
							}}
							type="primary"
							icon={<EditOutlined />}
							size="small"
						/>
					</Tooltip>
					<Tooltip title='delete' >
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
		// dispatch(getAdmin(`admin?page=${page}`));
		dispatch(getPolingUnit(`polling-unit?page=${page}`));
	}

	return (
		<ContainerDashboard title="Polling Unit">
			<section className="ps-items-listing">
				<div className="ps-section__header simple">
					<div className="ps-section__filter">
						{/* <FormSearchSimple handleSearch={handleSearch} /> */}
					</div>
					<div className="ps-section__actions mb-3">
						<a className="ps-btn success" href="#" onClick={() => setCreateModal(true)}>
							<i className="icon icon-plus mr-2" />
							Create Polling Units
						</a>
					</div>
				</div>
				<div className="ps-section__content">
					<Table
						pagination={false}
						loading={loading}
						columns={table}
						dataSource={pollingUnits}
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
			
			{/* create polling unit start */}
			<Modal
				title="Create New Polling unit"
				style={{ top: 20 }}
				visible={createModal}
				centered
				footer={null}
				onCancel={() => setCreateModal(false)}
			>
				<Form onFinish={onFinish} form={form}>
					<Form.Item
						name="unit"
						rules={[{ required: true, message: 'Please input unit' }]}
					>
						<Input size="large" placeholder="Poling unit" />
					</Form.Item>
					<Form.Item
						name="local_govt"
						rules={[{ required: true, message: 'Please input local govt. name' }]}
					>
						<Input size="large" placeholder="Your Local Govt." />
					</Form.Item>
					<Form.Item
						name="ward"
						rules={[{ required: true, message: 'Please input ward name' }]}
					>
						<Input size="large" placeholder="Your Ward" />
					</Form.Item>
					<Form.Item
						name="reg_voters"
						rules={[{ required: true, message: 'Please input register voters no' }]}
					>
						<Input size="large" placeholder="Reg. Voters No." />
					</Form.Item>
					<Form.Item
						name="state"
						rules={[{ required: true, message: 'Please select state' }]}
					>
						<Select placeholder="Select state">
							{states?.map((r) => (
								<Option key={Math.random()} value={r.id}>
									{r.State}
								</Option>
							))}
						</Select>
					</Form.Item>
					<Form.Item>
						<button className="ps-btn w-100 success" >Submit</button>
					</Form.Item>
				</Form>
			</Modal>
			{/* create polling unit end */}

			{/* edit polling unit start */}
			<Modal
				title="Edit New Polling unit"
				style={{ top: 20 }}
				open={editModal}
				centered
				footer={null}
				onCancel={() => setEditModal(false)}
			>
				<Form onFinish={onFinishEdit} form={form}>
					<Form.Item
						name="reg_voters"
						rules={[{ required: true, message: 'Please input register voters no' }]}
					>
						<Input size="large" placeholder="Reg. Voters No." />
					</Form.Item>
					<Form.Item>
						<button className="ps-btn w-100 success" >Update</button>
					</Form.Item>
				</Form>
			</Modal>
			{/* create polling unit end */}

		</ContainerDashboard>
	);
};

const mapStateToProps = ({dispatch, polling, states}) =>({
	dispatch,
	loading: polling.loading,
	pollingUnits: polling.pollingUnits,
	total: polling.total,
	states: states.states
})

export default connect(mapStateToProps)(PollingUnitPage);
