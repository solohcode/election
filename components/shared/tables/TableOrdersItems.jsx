import React from 'react';
import Link from 'next/link';
import { Empty, Menu, Skeleton } from 'antd';
import DropdownAction from '~/components/elements/basic/DropdownAction';

const TableOrdersItems = ({data, loading}) => {

    const tableItemsView = data.map((item) => {
        let badgeView, fullfillmentView;
        const menuView = (
            <Menu>
                <Menu.Item key={0}>
                    <a className="dropdown-item" href="#">
                        Accept
                    </a>
                </Menu.Item>
                <Menu.Item key={0}>
                    <a className="dropdown-item" href="#">
                        <i className="icon-t"></i>
                        Decline
                    </a>
                </Menu.Item>
            </Menu>
        );
        if (item.payment) {
            badgeView = <span className="ps-badge success">Paid</span>;
        } else {
            badgeView = <span className="ps-badge gray">Unpaid</span>;
        }
        return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                    <Link href="/orders/order-detail">
                        <a>
                            <strong>{item.product}</strong>
                        </a>
                    </Link>
                </td>
                <td>
                    <strong> Aug 15, 2020</strong>
                </td>
                <td>{badgeView}</td>
                <td>{fullfillmentView}</td>
                <td>
                    <strong>{item.total}</strong>
                </td>
                <td>
                    {/* <DropdownAction /> */}
                </td>
            </tr>
        );
    });
    return (
        <div className="table-responsive">
            <table className="table ps-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Product</th>
                        <th>Payment</th>
                        <th>Fullfillment</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
					{loading && <tr><td colSpan={6}> <Skeleton active /> </td></tr>}
					{!loading && data.length === 0 ? 
					<tr><td colSpan={6}><Empty /></td></tr> : 
					tableItemsView}</tbody>
            </table>
        </div>
    );
};

export default TableOrdersItems;
