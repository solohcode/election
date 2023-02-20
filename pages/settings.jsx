import { toggleDrawerMenu } from '@/store/app/action';
import { Form, Input } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col} from 'reactstrap'
import ContainerDashboard from '../components/layouts/ContainerDashboard';

const Index = () => {
	const dispatch = useDispatch();
  useEffect(() => {
		dispatch(toggleDrawerMenu(false));
	}, []);
    const [form] = Form.useForm();

    const onFinish = () => {

    }

	return (
		<ContainerDashboard title="Settings" icon='/svg/settings-green.svg'>
      <div className="settings-card">
        <Row>
          <Col sm={12} lg={6} md={6}>
            <div>
              <img src='/svg/display-picture.svg' alt='display picture' />
            </div>
            <div className='group-btns'>
              <button className=' btns green-btn'>Save</button>
              <button className='btns outline-black-btn'>Cancel</button>
            </div>
          </Col>
          <Col sm={12} lg={6} md={6}>
            <Form onFinish={onFinish} form={form}>
              <Form.Item
                name="accredited"
                rules={[{ required: true, message: 'Please input accredited value' }]}
              >
                <Input size='large' placeholder='Total voters accredited for this election' type='number' />
              </Form.Item>
              <Form.Item
                name="accredited"
                rules={[{ required: true, message: 'Please input accredited value' }]}
              >
                <Input size='large' placeholder='Total voters accredited for this election' type='number' />
              </Form.Item>
              <Form.Item
                name="accredited"
                rules={[{ required: true, message: 'Please input accredited value' }]}
              >
                <Input size='large' placeholder='Total voters accredited for this election' type='number' />
              </Form.Item>
              <Form.Item
                name="accredited"
                rules={[{ required: true, message: 'Please input accredited value' }]}
              >
                <Input size='large' placeholder='Total voters accredited for this election' type='number' />
              </Form.Item>
              <Form.Item>
                <button className="ps-btn w-100 success">Submit</button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
		</ContainerDashboard>
	);
};

export default Index;
