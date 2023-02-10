import React from 'react';
import {Button, Table, Avatar, Menu, Dropdown} from 'antd'
import {DashOutlined } from '@ant-design/icons'

const TableCategoryItems = ({categories, loading}) => {

    const menu = (
        <Menu>
          <Menu.Item>
            <a >
              Edit
            </a>
          </Menu.Item>
          <Menu.Item>
            <a >
              Delete
            </a>
          </Menu.Item>
        </Menu>
      );

    const dataColumn = [
		{
			title: 'Id',
			dataIndex: 'id',
			key: 'id',
            dataIndex: 'index',
            render:(text,record,index)=>`${index+1}`,
		},
        {
			title: 'Category Banner',
			dataIndex: 'category_image',
			key: 'category_image',
			render: text => <Avatar src={text} shape="square" size="large" />
		},
        {
			title: 'Category Image',
			dataIndex: 'product_image',
			key: 'product_image',
			render: text => <Avatar src={text} shape="square" size="large" />
		},
		{
			title: 'Banner Name',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: 'Action',
			key: 'id',
			dataIndex: 'id',
			render: (id, data) => (
                <Dropdown overlay={menu} placement="bottomRight" arrow>
                    <Button icon={<DashOutlined />}/>
                </Dropdown>
			),
		},
	];


    return (
        <Table loading={loading} columns={dataColumn} dataSource={categories} rowKey="id"/>
    );
};

export default TableCategoryItems;
