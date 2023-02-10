import React from 'react';
import DropdownAction from '~/components/elements/basic/DropdownAction';

const TableCustomerItems = ({data, header}) => {
  const customers = [
      {
          currency: 'GBP',
          amount: '$1200',
          balance: '$211.00',
          orders: '10',
          status: 'true',
      },
      {
          currency: 'USD',
          amount: '$2000',
          balance: '$211.00',
          orders: '10',
          status: 'true',
      },
      {
          currency: 'NGR',
          amount: '$1400',
          balance: '$211.00',
          orders: '10',
          status: 'true',
      },
      {
          currency: 'USD',
          amount: '$3000',
          balance: '$211.00',
          orders: '10',
          status: 'false',
      },
      {
          currency: 'ZAR',
          amount: '$1000',
          balance: '$211.00',
          orders: '10',
          status: 'true',
      },
      {
          currency: 'USD',
          amount: '$2500',
          balance: '$211.00',
          orders: '10',
          status: 'false',
      },
      {
          currency: 'ZAR',
          amount: '$10500',
          balance: '$211.00',
          orders: '10',
          status: 'true',
      },
      {
          currency: 'GBP',
          amount: '$40000',
          balance: '$211.00',
          orders: '10',
          status: 'false',
      },
      {
          currency: 'NGR',
          amount: '$1000',
          balance: '$211.00',
          orders: '10',
          status: 'true',
      },
  ];
  const tableItemsView = customers.map((item, index) => {
      let badgeView;

      if (item.status) {
          badgeView = <span className="ps-badge success">Completed</span>;
      } else {
          badgeView = <span className="ps-badge gray">Pending</span>;
      }

      return (
          <tr key={index}>
              <td>{index}</td>
              <td>
                <strong>{item.currency}</strong>
              </td>
              <td>{item.amount}</td>
              <td>{item.balance}</td>
              <td>{item.orders}</td>
              <td>{badgeView}</td>
              <td>
                  <DropdownAction />
              </td>
          </tr>
      );
  });
  return (
    <div className="table-responsive">
      <table className="table ps-table">
        <thead>
          <tr>
            <th>Tnx ID</th>
            <th>Currency</th>
            <th>Amount</th>
            <th>exchange rate</th>
            <th>Total orders</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{tableItemsView}</tbody>
      </table>
    </div>
  );
};

export default TableCustomerItems;
