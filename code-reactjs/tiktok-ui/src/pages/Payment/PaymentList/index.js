import classNames from 'classnames/bind';
import styles from './PaymentList.module.scss';

const cx = classNames.bind(styles);

function PaymentList(props) {
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    return (
        <div>
            <div className={cx('confirm-product')}>
                <div className={cx('confirm-product_img')}>
                    <img src={props.image} alt="anh" />
                </div>
                <div className={cx('confirm-product-infor')}>
                    <h3>{props.name}</h3>
                    <p>Màu: {props.type}</p>
                    <p>Số lượng: {props.count}</p>
                </div>
            </div>
            <div className={cx('confirm-price')}>
                <p>{VND.format(props.price)}</p>
            </div>
        </div>
    );
}

export default PaymentList;
