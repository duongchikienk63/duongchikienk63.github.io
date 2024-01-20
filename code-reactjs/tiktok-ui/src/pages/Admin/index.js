import HeaderOnly from '~/components/Layout/HeaderBrand';
import Header from '~/components/Layout/Component/Header';
import { Container, Row, Col } from 'react-bootstrap';
import AddProduct from './AddProducts';
import ProductsList from './ProductsList';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Admin.module.scss';

const cx = classNames.bind(styles);

function Admin() {
    const [productId, setProductId] = useState('');

    const getProductIdHandler = (id) => {
        setProductId(id);
    };

    return (
        <div className={cx('admin')}>

            <Header admin='active' />

            <Container style={{ width: '400px', marginTop: '150px' }}>
                <Row>
                    <Col>
                        <AddProduct
                            id={productId}
                            setProductId={setProductId}
                        />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <ProductsList getProductId={getProductIdHandler} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Admin;
