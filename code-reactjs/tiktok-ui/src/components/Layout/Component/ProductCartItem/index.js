import classNames from 'classnames/bind';
import styles from './ProductCartItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
// import { useState } from 'react';
// import ProductDataService from '~/services/produts.services';

const cx = classNames.bind(styles);

function ProductCartItem(props) {
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    return (
        <div className={cx('produts-cart-item')}>
            <div className={cx('cart-item-img')}>
                <img src={props.image} alt="anh" />
            </div>
            <div className={cx('cart-item-infor')}>
                <div className={cx('cart-item-total')}>
                    <h3>{props.name}</h3>
                    <p className={cx('fix-size')}>
                        {props.type} / {props.size}
                    </p>
                    <div className={cx('total_product')}>
                        <div className={cx('number_product')}>
                            <button
                                onClick={props.minus}
                                className={cx('minus')}
                            >
                                <FontAwesomeIcon
                                    icon={faMinus}
                                ></FontAwesomeIcon>
                            </button>
                            <span className={cx('total-products')}>
                                {props.count}
                            </span>
                            <button
                                className={cx('add')}
                                onClick={props.plus}
                            >
                                <FontAwesomeIcon
                                    icon={faPlus}
                                ></FontAwesomeIcon>
                            </button>
                        </div>
                    </div>
                    <p className={cx('detele')} onClick={props.delete}>
                        Xóa
                    </p>
                </div>
                <div className={cx('cart-item-price')}>
                    <p>{VND.format(props.price)}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductCartItem;
