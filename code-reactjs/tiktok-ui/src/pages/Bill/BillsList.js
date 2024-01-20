import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import BillDataService from '~/services/bills.services';
import classNames from 'classnames/bind';
import styles from './Bill.module.scss';

const cx = classNames.bind(styles);

const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});

const BillsList = ({ getProductId }) => {
    const [bills, setBills] = useState([]);

    useEffect(() => {
        getBills();
    }, []);

    const getBills = async () => {
        const data = await BillDataService.getAllBills();
        setBills(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const deleteHandler = async (id) => {
        await BillDataService.deleteBill(id);
        getBills();
    };
    return (
        <div className={cx('product-list')}>
            {/* <pre>{JSON.stringify(Products, undefined, 2)}</pre>} */}
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Mã đơn hàng</th>
                        <th>Tên khách hàng</th>
                        <th>Địa chỉ khách hàng</th>
                        <th>Liên hệ khách hàng</th>
                        <th>Sản phẩm</th>
                        <th>Tổng số tiền</th>
                        <th>Ghi chú</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {bills.map((doc, index) => {
                        return (
                            <tr key={doc.id}>
                                <td style={{ textAlign: 'center' }}>
                                    {doc.code}
                                </td>
                                <td style={{ textAlign: 'center' }}>
                                    {doc.userName}
                                </td>
                                <td>
                                    {doc.address}, {doc.street}
                                </td>
                                <td style={{ textAlign: 'center' }}>
                                    {doc.userPhone}
                                </td>
                                <td>
                                    <ul>
                                        {doc.bill.map((cart, index) => {
                                            return (
                                                <li key={index}>
                                                    {cart.name} x {cart.count}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </td>
                                <td style={{ textAlign: 'center' }}>
                                    {VND.format(doc.total)}
                                </td>
                                <td>{doc.note}</td>
                                <td style={{ textAlign: 'center' }}>
                                    <Button
                                        variant="danger"
                                        className={cx('delete')}
                                        onClick={(e) => deleteHandler(doc.id)}
                                    >
                                        Done
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
};

export default BillsList;
