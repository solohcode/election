import { updateAgent } from '@/store/agent/action';
import { getPolingUnit } from '@/store/pollingunit/action';
import { modalWarning, uploadFile } from '@/store/utilities';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { DatePicker, Form, Input, Select, Upload } from 'antd';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Row, Col} from 'reactstrap'
import ContainerDashboard from '../components/layouts/ContainerDashboard';

const Index = ({dispatch, pollingUnits}) => {
	const [form] = Form.useForm();
	const [imageUrl, setImageUrl] = useState("")
	const [userData, setUserData] = useState({})
	const [loader, setLoader] = useState(false);

  useEffect(() => {
    dispatch(getPolingUnit('polling-unit?type=all'));
    const d = JSON.parse(localStorage.getItem("electionData"))
		setUserData(d);
	}, []);

  const onFinish = (values) =>{
		const data = {
			...values,
			photo: imageUrl,
		}
		dispatch(updateAgent({ data, dispatch }))
	}

	const dummyRequest = ({ onSuccess }) => {
		setTimeout(() => {
			onSuccess("ok");
		}, 0)
	}

  	const uploadButton = () => (
		<div>
			{loader ? <LoadingOutlined /> : <PlusOutlined />}
			<div style={{ marginTop: 8 }}>passport</div>
		</div>
	);

  	const handleUploadImage = async(info) => {
		if (info.file.status === 'uploading') {
			setLoader(true);
		}
		if (info.file.status === 'done') {
			const url = await uploadFile(info.file.originFileObj)
			if (!url) {
				modalWarning("upload error", "Please check your network and try again");
				setLoader(false);
				return;
			}
			setImageUrl(url);
			setLoader(false)
		}
	};
	return (
		<ContainerDashboard title={`Welcome ${userData?.fullname}`}>
			<div className="agent-card">
				<Form
          onFinish={onFinish}
          form={form}
          // initialValues={{
          //   firstname: userData?.fullname,
          //   lastname: userData?.fullname,
          //   pvc: userData?.pvc,
          //   memberId: userData?.memberId,
          //   ward: userData?.ward,
          //   male: userData?.male,
          // }}
        >
					<Row>
						<Col sm={12} md={6} lg={6}>
              <Form.Item name="firstname" initialValue={userData?.fullname}>
								<Input size='large' placeholder='Add first name' disabled />
							</Form.Item>
              <Form.Item name="lastname">
								<Input size='large' placeholder='Add last name' disabled />
							</Form.Item>
              <Form.Item name="middlename">
								<Input size='large' placeholder='Add middle name' disabled />
							</Form.Item>
							<Form.Item
								name="gender"
								rules={[{ required: true, message: 'Please select your gender' }]}
							>
								<Select
                  defaultValue="Choose your gender"
                  options={[
                    {
                      value: 'male',
                      label: 'Male',
                    },
                    {
                      value: 'female',
                      label: 'Female',
                    },
                  ]}
                />
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
								name="dob"
								rules={[{ required: true, message: 'Please select date of birth' }]}
							>
								<DatePicker />
							</Form.Item>
							<Form.Item
								name="phone"
								rules={[{ required: true, message: 'Please input your phone number' }]}
                initialValue={userData?.phone}
							>
								<Input size='large' placeholder='Add phone number' />
							</Form.Item>
						</Col>
						<Col sm={12} md={6} lg={6}>
							<Form.Item
								name="ward"
								rules={[{ required: true, message: 'Please input your ward' }]}
							>
								<Input size='large' placeholder='Add ward' />
							</Form.Item>
							<Form.Item
								name="memberId"
								rules={[{ required: true, message: 'Please input membership id' }]}
							>
								<Input size='large' placeholder='Add membership number' />
							</Form.Item>
							<Form.Item
								name="pvc"
								rules={[{ required: true, message: 'Please input pvc number' }]}
							>
								<Input size='large' placeholder='Add pvc number' />
							</Form.Item>
							<Form.Item name="photo">
								<Upload
                  listType="picture-card"
                  className="avatar-uploader"
                  customRequest={dummyRequest}
                  showUploadList={false}
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  onChange={handleUploadImage}
                >
                  {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton("Upload image")}
                </Upload>
							</Form.Item>
							<Form.Item>
								<button className="ps-btn w-100 success">Submit</button>
							</Form.Item>
						</Col>
					</Row>
				</Form>
			</div>
		</ContainerDashboard>
	);
};

const mapStateToProps = ({ dispatch, agent, polling }) => ({
	dispatch,
	loading: agent.loading,
	pollingUnits: polling.pollingUnits
})

export default connect(mapStateToProps)(Index);
