import React, { useEffect } from 'react';
import ContainerDefault from '~/components/layouts/ContainerDefault';
import FormSearchSimple from '~/components/shared/forms/FormSearchSimple';
import HeaderDashboard from '~/components/shared/headers/HeaderDashboard';
import { connect, useDispatch } from 'react-redux';
import { toggleDrawerMenu } from '~/store/app/action';
import { Table, Pagination, Button } from 'antd';
import { getAdmin } from '~/store/admin/action';

const Breakdown = ({loading, total}) => {

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(toggleDrawerMenu(false));
	}, []);

	const table = [
		{
			title: 'Id',
			dataIndex: 'id',
			key: 'id',
			render: (text, data, dataIndex) => <strong>{dataIndex + 1}</strong>
		},
		{
			title: 'Party',
			dataIndex: 'party',
			key: 'party',
		},
		{
			title: 'Score',
			dataIndex: 'score',
			key: 'score',
		}
	];

	const handlePagination = (page, pageSize) => {
		dispatch(getAdmin(`admin?page=${page}`));
	}

	const handleSearch = (e) => {
		dispatch(getAdmin(`admin?search=${e.target.value}`));
	}

	const agents = [
		{id: 1, party: 'APC', score: '300'},
		{id: 2, party: 'PDP', score: '200'},
		{id: 3, party: 'LP', score: '10'},
		{id: 4, party: 'NNPC', score: '10'},
		{id: 5, party: 'YPP', score: '1'},
	];

	return (
		<ContainerDefault title="Polling Unit">
			<HeaderDashboard
				title="Result Details"
				description="Election Update"
			/>
			<section className="ps-items-listing">
				<div className="ps-section__header simple">
					<div className="ps-section__filter">
						<FormSearchSimple handleSearch={handleSearch} />
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
		</ContainerDefault>
	);
};

const mapStateToProps = ({dispatch, admin}) =>({
	dispatch,
	loading:admin.loading,
	admins:admin.admins,
	total: admin.total,
})

export default connect(mapStateToProps)(Breakdown);
