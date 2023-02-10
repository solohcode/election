import { Empty, Skeleton } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import DropdownAction from '~/components/elements/basic/DropdownAction';
import { disableOrEnableAdminMember } from '~/store/member/action';

const TableMembersItems = ({data, table, loading, acct_type}) => {

	const dispatch = useDispatch()
	const handleDisable = (status, id) =>{
		const value = {
			status_type : status,
			get_selection: [id]
		}
		const admin = acct_type === "admin"? "admin" :"cooperative"
		dispatch(disableOrEnableAdminMember({admin, value, dispatch}))
	}
	
    const tableItemsView = data.map((item, index) => {
        let badgeView;

        if (item.approved === 1) {
            badgeView = <span className="ps-badge success">active</span>;
        } else {
            badgeView = <span className="ps-badge gray">inactive</span>;
        }

		if(index < 5){
			return (
				<tr key={index}>
					<td>{item.user_no}</td>
					<td>
						<strong>{item.full_name}</strong>
					</td>
					<td>{item.email}</td>
					<td>{item.phone_no}</td>
					<td>{item.joined_date}</td>
					<td>{badgeView}</td>
					{table !== "dashboard" &&<td>
						<DropdownAction url={`/member-details/${item.user_id}`} status={item.approved} handleDisable={()=>handleDisable(item.approved, item.user_id)} />
					</td>}
				</tr>
			);
		}
    });

    return (
        <div className="table-responsive">
            <table className="table ps-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Joined Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
					{loading && <tr><td colSpan={6}> <Skeleton active /> </td></tr>}
					{!loading && data.length === 0 ? 
					<tr><td colSpan={6}><Empty /></td></tr> : 
					tableItemsView}
				</tbody>
            </table>
        </div>
    );
};

export default TableMembersItems;
