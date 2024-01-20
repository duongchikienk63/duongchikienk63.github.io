import HeaderOnly from '~/components/Layout/HeaderBrand';
import { Container, Row, Col } from 'react-bootstrap';
import BillsList from './BillsList';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Bill.module.scss';

const cx = classNames.bind(styles);

function Bill() {
    const [productId, setProductId] = useState('');

    const getProductIdHandler = (id) => {
        setProductId(id);
    };

    return (
        <div className={cx('admin')}>
            <HeaderOnly bill="active" freeze="&nbsp;Quản lý" />
            <Container>
                <Row>
                    <Col>
                        <BillsList getProductId={getProductIdHandler} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Bill;
