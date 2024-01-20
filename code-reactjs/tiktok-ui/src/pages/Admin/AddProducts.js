import React, { useState, useEffect } from 'react';
import {
    Form,
    Alert,
    InputGroup,
    Button,
    // ButtonGroup
} from 'react-bootstrap';
import ProductDataService from '~/services/products.services';
import classNames from 'classnames/bind';
import styles from './Admin.module.scss';

const cx = classNames.bind(styles);

const AddProduct = ({ id, setProductId }) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState('');
    const [linkImage, setLinkImage] = useState('');
    // const [code, setCode] = useState('');
    // const [flag, setFlag] = useState(true);
    const [message, setMessage] = useState({ error: false, msg: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        if (name === '' || type === '' || price === '' || linkImage === '') {
            setMessage({ error: true, msg: 'All fields are mandatory!' });
            return;
        }
        const newProduct = {
            name,
            type,
            price,
            image: linkImage,
            total: '1000',
            count: '1',
            size: '',
            // code,
            sold: '0',
        };
        try {
            if (id !== undefined && id !== '') {
                await ProductDataService.updateProduct(id, newProduct);
                setProductId('');
                setMessage({ error: false, msg: 'Sản phẩm đã được cập nhật!' });
            } else {
                await ProductDataService.addProducts(newProduct);
                setMessage({
                    error: false,
                    msg: 'Sản phẩm mới đã được thêm!',
                });
            }
        } catch (err) {
            setMessage({ error: true, msg: err.message });
        }

        setName('');
        setType('');
        setPrice('');
        setLinkImage('');
        // setCode('');
    };

    const editHandler = async () => {
        setMessage('');
        try {
            const docSnap = await ProductDataService.getProduct(id);
            setName(docSnap.data().name);
            setType(docSnap.data().type);
            setPrice(docSnap.data().price);
            setLinkImage(docSnap.data().image);
            // setCode(docSnap.data().total);
        } catch (err) {
            setMessage({ error: true, msg: err.message });
        }
    };

    useEffect(() => {
        if (id !== undefined && id !== '') {
            editHandler();
        }
    }, [id]);

    return (
        <div className={cx('add-product')}>
            <div className="p-4 box">
                {message?.msg && (
                    <Alert
                        variant={message?.error ? 'danger' : 'success'}
                        dismissible
                        onClose={() => setMessage('')}
                    >
                        {message?.msg}
                    </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formProductName">
                        <InputGroup>
                            <InputGroup.Text id="formProductName"></InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Tên sản phẩm"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formProductType">
                        <InputGroup>
                            <InputGroup.Text id="formProductType"></InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Kiểu dáng sản phẩm"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formProductPrice">
                        <InputGroup>
                            <InputGroup.Text id="formProductPrice"></InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Giá tiền sản phẩm"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="formProductLinkImage"
                    >
                        <InputGroup>
                            <InputGroup.Text id="formProductLinkImage"></InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Đường dẫn hình ảnh sản phẩm"
                                value={linkImage}
                                onChange={(e) => setLinkImage(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>

                    {/* <Form.Group className="mb-3" controlId="formProductTotal">
                        <InputGroup>
                            <InputGroup.Text id="formProductTotal"></InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Product Code"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group> */}

                    {/* <ButtonGroup aria-label="Basic example" className="mb-3">
                        <Button
                            disabled={flag}
                            variant="success"
                            onClick={(e) => {
                                setPrice('Available');
                                setFlag(true);
                            }}
                        >
                            Available
                        </Button>
                        <Button
                            variant="danger"
                            disabled={!flag}
                            onClick={(e) => {
                                setPrice('Not Available');
                                setFlag(false);
                            }}
                        >
                            Not Available
                        </Button>
                    </ButtonGroup> */}
                    <div className="d-grid gap-2">
                        <Button variant="primary" type="Submit">
                            Thêm / Sửa
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default AddProduct;
