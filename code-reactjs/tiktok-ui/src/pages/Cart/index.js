import Footer from '~/components/Layout/Component/Footer';
import HeaderOnly from '~/components/Layout/HeaderBrand';
import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { Link } from 'react-router-dom';
import ProductCartItem from '~/components/Layout/Component/ProductCartItem';
import CartDataService from '~/services/carts.services';
import { useState, useEffect } from 'react';

import { useUserAuth } from '~/components/LoginWeb/context/UserAuthContext';

import { db } from '~/firebase';
import { doc, setDoc } from 'firebase/firestore';

const cx = classNames.bind(styles);

function Cart() {
    const [carts, setCarts] = useState([]);
    const [totalPriceCarts, setTotalPriceCarts] = useState(0);
    const [content, setContent] = useState('');
    const [toPayment, setToPayment] = useState('');
    // const [count, setCount] = useState(1);

    const { user } = useUserAuth();

    // useEffect(() => {
    //     getCarts();
    // }, [carts.length, getCarts]);

    const getCarts = async () => {
        if (user) {
            const data = await CartDataService.getAllCarts(user.uid);
            setCarts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
    };

    useEffect(() => {
        getCarts();
    }, [carts, user]);

    const handlerPlus = async (id) => {
        for (let i = 0; i < carts.length; i++) {
            if (id === carts[i].id) {
                const newCart = {
                    count: +carts[i].count + 1,
                };
                await CartDataService.updateCart(id, newCart, user.uid);
                getCarts();
            }
        }
    };

    const handlerMinus = async (id) => {
        for (let i = 0; i < carts.length; i++) {
            if (id === carts[i].id) {
                if (carts[i].count > 1) {
                    const newCart = {
                        count: +carts[i].count - 1,
                    };
                    await CartDataService.updateCart(id, newCart, user.uid);
                    getCarts();
                }
            }
        }
    };

    const deleteHandler = async (id) => {
        await CartDataService.deleteCart(id, user.uid);
        getCarts();
    };

    const handleAddCart = async () => {
        const data = {
            carts,
        };
        await setDoc(doc(db, 'cart', user.uid), data);
    };

    useEffect(() => {
        if (carts.length > 0) {
            setToPayment('/payment');
        } else {
            setToPayment('');
        }
    }, [carts.length]);

    useEffect(() => {
        let total = 0;
        for (let i = 0; i < carts.length; i++) {
            total += carts[i].count * carts[i].price;
        }
        setTotalPriceCarts(total);
    }, [carts]);

    useEffect(() => {
        if (carts.length === 0) {
            setContent('Không có sản phẩm nào trong giỏ hàng!');
        } else {
            setContent('');
        }
    }, [carts.length]);

    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    return (
        <div>
            <pre>{JSON.stringify(carts, 2)}</pre>
            <HeaderOnly freeze="&nbsp;Giỏ hàng" />
            <section className={cx('detail-product')}>
                <div className={cx('container')}>
                    <div className={cx('row')}>
                        <div className={cx('col-8')}>
                            <div className={cx('header-cart')}>
                                <h2 className={cx('count')}>
                                    GIỎ HÀNG CỦA BẠN ({carts.length})
                                </h2>
                                <Link to="/product">Chọn thêm sản phẩm</Link>
                            </div>
                            <div className={cx('products-cart')} id="style-1">
                                <div className={cx('content')}>{content}</div>
                                {carts.map((doc, index) => {
                                    return (
                                        <ProductCartItem
                                            key={index}
                                            name={doc.name}
                                            image={doc.image}
                                            count={doc.count}
                                            type={doc.type}
                                            size={doc.size}
                                            price={doc.price}
                                            delete={(e) =>
                                                deleteHandler(doc.id)
                                            }
                                            id={doc.id}
                                            plus={(e) => handlerPlus(doc.id)}
                                            minus={(e) => handlerMinus(doc.id)}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                        <div className={cx('col-4')}>
                            <div className={cx('pay')}>
                                <div className={cx('pay-price')}>
                                    <span>Tạm tính:</span>
                                    <p className={cx('pay-total')}>
                                        {VND.format(totalPriceCarts)}
                                    </p>
                                </div>
                                <p>Miễn phí vận chuyển cho đơn hàng từ 500k</p>

                                <Link to={toPayment}>
                                    <button
                                        onClick={handleAddCart}
                                        className={cx('btn-order')}
                                    >
                                        TIẾN HÀNH ĐẶT HÀNG
                                    </button>
                                </Link>

                                <p className={cx('endow')}>
                                    <strong>Ưu đãi hội viên</strong>
                                </p>

                                <p>
                                    Tích điểm đổi quà và rất nhiều ưu đãi đặc
                                    biệt khác, chỉ dành cho hội viên của DCK
                                    Store. Quý khách hãy đăng ký hội viên để
                                    nhận thêm nhiều ưu đãi!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className={cx('margin-top')}></div>
            <Footer />
        </div>
    );
}

export default Cart;




