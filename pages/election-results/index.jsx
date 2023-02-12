import React, { useEffect, useState } from 'react';
import ContainerDefault from '@/components/layouts/ContainerDefault';
import HeaderDashboard from '@/components/shared/headers/HeaderDashboard';
import { connect, useDispatch } from 'react-redux';
import { toggleDrawerMenu } from '@/store/app/action';
import { Col, Row } from 'reactstrap';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { DeleteOutlined, PlusSquareOutlined } from '@ant-design/icons';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal, notification, Select, Space, Table } from 'antd';
// import { parties } from '@/store/utilities';
import { getResults } from '@/store/result/action';
import { createResult } from '../../store/result/action';
import { getAllParties } from '../../store/party/action';
import ContainerDashboard from '@/components/layouts/ContainerDashboard';
import DashboardCard from '@/components/shared/cards/DashboardCard';

const ResultPage = ({ loading, electionResult, parties }) => {
	const { Option } = Select;
	const [form] = Form.useForm();
	const [createModal, setCreateModal] = useState(false);
	const [isAdmin, setIsAdmin] = useState(false);
	const [userData, setUserData] = useState({});
	const [result, setResult] = useState([]);
	const [tempData, setTempData] = useState(null);
	const [allParty, setAllParty] = useState([]);
	const [electionType, setElectionType] = useState('presidential');
	const {data, grandTotal} = electionResult || {}
	const dispatch = useDispatch();
	const filename = `${electionType}election-result-${new Date().getTime()}`
	const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
	const fileExtension = '.xlsx';
	const {confirm} = Modal;

	useEffect(() => {
		dispatch(toggleDrawerMenu(false));
		// dispatch(getResults(`election-result?type=${electionType}`));
		dispatch(getAllParties('party'));
		const d = JSON.parse(localStorage.getItem('electionData'));
		setIsAdmin(d?.user_type === 'admin')
		setUserData(d);
	}, []);

	useEffect(() => {
		setAllParty(parties);
	}, [parties])
	
	useEffect(() => {
		dispatch(getResults(`election-result?type=${electionType}`));
	}, [electionType])

	const onFinish = (values) => {
		const data = result.map((re) => {
			return {
				election_type: values.electionType,
				user: userData.id,
				polling_unit: userData.polling_unit,
				party: re.party,
				score: re.score,
				accredited: values.accredited
			}
		})
		// console.log(result, data);
		dispatch(createResult({data, dispatch}))
		setCreateModal(false);
	}

	const updateResult = (data, action) => {
		if(action === 'add') {
			if (data) {
				setResult(prevData => ([...prevData, data]));
				form.setFieldsValue({score: 0, party: 'select party'});
				const filteredParty = allParty.filter(f => f.id !== data.party);
				setAllParty(filteredParty);
				setTempData(null);
			}
		}else{
			const updatedRes = result.filter(re => data !== re.party);
			setResult(updatedRes);
		}
	}

	const table = [
		{
			title: 'Id',
			dataIndex: 'id',
			key: 'id',
			render: (text, data, dataIndex) => <strong>{dataIndex + 1}</strong>
		},
		{
			title: 'Party',
			dataIndex: 'partyName',
			key: 'partyName',
		},
		{
			title: 'Vote',
			dataIndex: 'score',
			key: 'score',
		},
		{
			title: 'Action',
			dataIndex: 'party',
			key: 'party',
			render: (data) =>
				<Button
					onClick={() => updateResult(data, 'remove')}
					type="danger"
					icon={<DeleteOutlined />}
					size="small"
				/>
		},
	];

	const resultTable = [
		{
			title: 'S/N',
			dataIndex: 'id',
			key: 'id',
			render: (text, data, dataIndex) => <strong>{dataIndex + 1}</strong>
		},
		{
			title: 'Party',
			dataIndex: 'logo',
			key: 'logo',
			render: (text, datum) => (
				<span>
					<img src={`/parties/${text}.jpg`} alt="party-logo" width={20} height={20} />
					<strong> {datum?.name}</strong>
				</span>)
		},
		{
			title: 'Vote',
			dataIndex: 'totalScore',
			key: 'totalScore',
			render: (text) => <strong>{text}</strong>
		},
		{
			title: 'Percent %',
			dataIndex: 'totalScore',
			key: 'totalScore',
			render: (text) => <strong>{Math.round((text/grandTotal || 0 ) * 100)}%</strong>
		},
	];

	let reportData = [];
	const exoportData = () => {
		const ws = XLSX.utils.json_to_sheet(reportData);
		const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
		const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
		const data = new Blob([excelBuffer], {type: fileType});
		FileSaver.saveAs(data, filename + fileExtension);
	}

	const getData = ()=>{
		reportData = data.map((e) => ({...e, percent: Math.round((e?.totalScore/grandTotal || 0 ) * 100)}))
	}

	const confirmAction = () => {
		if(data?.length > 0){
			getData()
			confirm({
				title: `Are you sure you want to download result in excel?`,
				icon: <ExclamationCircleOutlined />,
				content: 'Click Ok to continue',
				onOk() {
					exoportData()
				},
				onCancel() {
					console.log('Cancel');
				},
			});
		}else{
			notification.success({
				message: 'Empty Data',
				description: "You must get some data to export",
			})
		}
	}

	return (
		<ContainerDashboard title="Election Results" >
			<div className="ps-section__header simple">
				{!isAdmin ? (
					<div className="ps-section__filter">
						<a className="ps-btn success" href="#" onClick={() => setCreateModal(true)}>
							<i className="icon icon-plus mr-2" />
							Add unit result
						</a>
					</div>
				) : (
					<div className="ps-section__actions">
						<a className="ps-btn success" href="#" onClick={() =>confirmAction()}>
							<i className="icon icon-download mr-2" />
							Export Result
						</a>
					</div>
				)}
			</div>
			<div>
				{/* <p>Top 3 Presidential Leading Parties Vote</p> */}
				<Row className='mt-4'>
					<Col sm={6} lg={3} md={3}>
						<DashboardCard
							url="/election-results/details?tab=lagWest"
							icon="lga.png"
							color="green"
							name="Analysis By Lagos West"
							tab={0}
							count={10000}
						/>
					</Col>
					<Col sm={6} lg={3} md={3}>
						<DashboardCard
							url="/election-results/details?tab=lga"
							icon="lga.png"
							color="orange"
							name="Analysis By Local Govt"
							tab={1}
							count={1000}
						/>
					</Col>
					<Col sm={6} lg={3} md={3}>
						<DashboardCard
							url="/election-results/details?tab=ward"
							icon="lga.png"
							color="yellow"
							name="Analysis By Ward"
							isCurrency={false}
							tab={2}
							count={200}
						/>
					</Col>
					<Col sm={6} lg={3} md={3}>
						<DashboardCard
							url="/election-results/details?tab=pollingUnit"
							icon="lga.png"
							color="pink"
							name="Analysis By Unit"
							tab={3}
							count={120}
						/>
					</Col>
				</Row>
				<div className='mt-4'>
					<h4 className='mt-5 fs-5 text-center'>Total votes casted {grandTotal}</h4>
					<div className='justify-content-center d-flex'>
						<Select size='large' placeholder="Select election type" onChange={(e) => setElectionType(e)}>
							<Option value="presidential">Presidential Election</Option>
							<Option value="governor">Governorship Election</Option>
							<Option value="assembly">Assembly Election</Option>
							<Option value="senate">Senetaor Election</Option>
							<Option value="representative">Representative Election</Option>
						</Select>
					</div>
					<Table
						pagination={false}
						columns={resultTable}
						dataSource={data}
						rowKey="id"
					/>
				</div>
			</div>
			{/* add polling unit result start */}
			<Modal
				title="Add polling unit results"
				style={{ top: 20 }}
				visible={createModal}
				centered
				footer={null}
				onCancel={() => setCreateModal(false)}
			>
				<Form onFinish={onFinish} form={form}>
					<Form.Item
						name="electionType"
						rules={[{ required: true, message: 'Please select election type' }]}
					>
						<Select placeholder="Select election type">
							<Option value="presidential">Presidential Election</Option>
							<Option value="governor">Governorship Election</Option>
							<Option value="assembly">Assembly Election</Option>
							<Option value="senate">Senetaor Election</Option>
							<Option value="representative">Representative Election</Option>
						</Select>
					</Form.Item>
					<Form.Item
						name="accredited"
						rules={[{ required: true, message: 'Please input accredited value' }]}
					>
						<Input size='large' placeholder='Total voters accredited for this election' type='number' />
					</Form.Item>
					<Space>
						<Form.Item
							name="party"
							rules={[{ required: true, message: 'Please select party' }]}
						>
							<Select
								placeholder="Select party"
								onChange={(e) => {
									const p = allParty.find(el => el.id === e)
									setTempData(prevData => ({...prevData, party: p.id, partyName: p.logo}))
								}}
							>
								{allParty?.map((r) => (
									<Option key={Math.random()} value={r.id}>
										<span><img src={`/img/parties/${r.logo}.jpg`} alt="party-logo" width={10} height={10} /> {r.name}</span>
									</Option>
								))}
							</Select>
						</Form.Item>
						<Form.Item
							name="score"
							rules={[{ required: true, message: 'Please input vote count' }]}
						>
							<Input
								placeholder="vote number"
								onChange={(e) => setTempData(prevData => ({...prevData, score: e.target.value}))}
								type='number'
							/>
						</Form.Item>
						<Form.Item>
							<Button
								type='primary'
								icon={<PlusSquareOutlined />}
								onClick={() => updateResult(tempData, 'add')}
							/>
						</Form.Item>
					</Space>
					<Table
						pagination={false}
						columns={table}
						dataSource={result}
						rowKey="id"
					/>
					<Form.Item>
						<button className="ps-btn w-100 success" >
							{loading?"submitting...":"Submit"}
						</button>
					</Form.Item>
				</Form>
			</Modal>
			{/* add polling unit result end */}
		</ContainerDashboard>
	);
};

const mapStateToProps = ({dispatch, result, party}) =>({
	dispatch,
	loading: result.loading,
	electionResult: result.electionResult,
	parties: party.parties,
})

export default connect(mapStateToProps)(ResultPage);
