import { uploadFile, modalWarning } from '@/store/utilities';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Card, Col, Form, Input, Modal, Row, Upload } from 'antd';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ContainerDashboard from '../components/layouts/ContainerDashboard';

const Index = ({reports, dispatch, loading}) => {
	const [createModal, setCreateModal] = useState(false);
	const [loader, setLoader] = useState(false);
	const [evidentImage, setEvidentImage] = useState("")
	const { Meta } = Card;
	useEffect(() => {
    dispatch({
      type: 'report/ALL_REPORT',
      payload: {page: 1}
    })
	}, []);

	const onFinish = (values) =>{
		// dispatch(createAgent({data: values, dispatch}))
		setCreateModal(false);
	}

	const uploadButton = (title) => (
		<div>
			{loader ? <LoadingOutlined /> : <PlusOutlined />}
			<div style={{ marginTop: 8 }}>{title}</div>
		</div>
	);

	const dummyRequest = ({ onSuccess }) => {
		setTimeout(() => {
			onSuccess("ok");
		}, 0)
	}

	const handlePaymentEvident = async(info, type) => {
		if (info.file.status === 'uploading') {
			setLoader(true);
		}
		if (info.file.status === 'done') {
			// Get this url from response in real world.
			const url = await uploadFile(info.file.originFileObj)
			if (!url) {
				modalWarning("upload error", "Please check your network and try again");
				setLoader(false);
				return;
			}
			setEvidentImage(url);
			setLoader(false);
		}
	};

	return (
		<ContainerDashboard title="Units Report" icon='/svg/report-green.svg'>
			<div className='d-flex justify-content-between px-3'>
				<div>
					<button className='ps-btn' onClick={() => setCreateModal(true)}>
						Create Report
					</button>
				</div>
			</div>
			<div className="m-3">
				<Row gutter={16}>
					{reports.map( (r) =>
						<Col span={6}>
							<Card
								hoverable
								cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
							>
								<Meta title="Europe Street beat" description="www.instagram.com" />
							</Card>
						</Col>
					)}
				</Row>
			</div>
			<Modal
				title="Create New Report"
				style={{ top: 20 }}
				open={createModal}
				centered
				footer={null}
				onCancel={() => setCreateModal(false)}
			>
				<Form onFinish={onFinish}>
					<Form.Item
						name="title"
						rules={[{ required: true, message: 'Please input title' }]}
					>
						<Input size="large" placeholder="Title" />
					</Form.Item>
					<Form.Item
						name="short_description"
						rules={[{ required: true, message: 'Please input short description' }]}
					>
						<Input size="large" placeholder="short_description" />
					</Form.Item>
					<Form.Item
						name="details"
						rules={[{ required: true, message: 'Please input details' }]}
					>
						<Input.TextArea size="large" placeholder="What is happening in your area" />
					</Form.Item>
					
					<Form.Item
						label="Payment Evidence"
					>
						<Upload
							name="image"
							listType="picture-card"
							className="avatar-uploader"
							customRequest={dummyRequest}
							showUploadList={false}
							action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
							onChange={(e) => handlePaymentEvident(e, "evident")}
						>
							{evidentImage ? <img src={evidentImage} alt="avatar" style={{ width: '100%' }} /> : uploadButton("Upload Payslip")}
						</Upload>
					</Form.Item>
					<Form.Item>
						<button className="ps-btn w-100 success">
							{loading?"submitting...":"Submit"}
						</button>
					</Form.Item>
				</Form>
			</Modal>
		</ContainerDashboard>
	);
};

const mapStateToProps = ({ dispatch, report }) => ({
	dispatch,
	loading: report.loading,
	reports: report.reports
})

export default connect(mapStateToProps)(Index);
