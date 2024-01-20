import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import ProductDataService from '~/services/products.services';
import classNames from 'classnames/bind';
import styles from './Admin.module.scss';

const cx = classNames.bind(styles);

const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});

const ProductsList = ({ getProductId }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const data = await ProductDataService.getAllProducts();
        setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const deleteHandler = async (id) => {
        await ProductDataService.deleteProduct(id);
        getProducts();
    };
    return (
        <div className={cx('product-list')}>
            <div className="mb-2">
                <Button variant="dark edit" onClick={getProducts}>
                    Refresh List
                </Button>
            </div>

            {/* <pre>{JSON.stringify(Products, undefined, 2)}</pre>} */}
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên sản phẩm</th>
                        <th>Kiểu dáng</th>
                        <th>Giá tiền</th>
                        <th>Tổng số lượng</th>
                        <th>Số lượng đã bán</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((doc, index) => {
                        return (
                            <tr key={doc.id}>
                                <td>{index + 1}</td>
                                <td>{doc.name}</td>
                                <td>{doc.type}</td>
                                <td>{VND.format(doc.price)}</td>
                                <td>{doc.total}</td>
                                <td>{doc.sold}</td>
                                <td>
                                    <Button
                                        variant="secondary"
                                        className={cx('edit')}
                                        onClick={(e) => getProductId(doc.id)}
                                    >
                                        Sửa
                                    </Button>
                                    <Button
                                        variant="danger"
                                        className={cx('delete')}
                                        onClick={(e) => deleteHandler(doc.id)}
                                    >
                                        Xoá
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

export default ProductsList;
