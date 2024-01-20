import classNames from 'classnames/bind';
import styles from './Details.module.scss';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import CartDataService from '~/services/carts.services';
import { useUserAuth } from '~/components/LoginWeb/context/UserAuthContext'; 

const cx = classNames.bind(styles);

function Details(props) {
    const [size, setSize] = useState('');
    const [message, setMessage] = useState({ error: false, msg: '' });

    let product = JSON.parse(localStorage.getItem('item'));

    const name = product[0].name;
    const price = product[0].price;
    const image = product[0].image;
    const count = product[0].count;
    const type = product[0].type;

    // const idItem = product[0].id;

    const navigate = useNavigate();

    const { user } = useUserAuth();

    // useEffect(() => {
    //     if(user){
    //         const idUser = user.uid;
    //     }
    // }, [user])

    const handleAdd = async () => {
        if (user) {
            setMessage('');
            if (size === '') {
                setMessage({
                    error: true,
                    msg: 'Bạn chưa chọn size cho sản phẩm!',
                });
                return;
            }
            const newCart = {
                name,
                price,
                image,
                count,
                type,
                size,
            };

            try {
                await CartDataService.addCarts(newCart, user.uid);
                // await CartDataService.addUserCarts(user.email, newCart, idItem);
                setMessage({
                    error: false,
                    msg: 'Sản phẩm đã được thêm vào giỏ hàng thành công!',
                });
            } catch (err) {
                setMessage({ error: true, msg: err.message });
            }
        } else {
            navigate('/loginauth/*');
        }
    };

    const handleToCart = async () => {
        if (user) {
            setMessage('');
            if (size === '') {
                setMessage({
                    error: true,
                    msg: 'Bạn chưa chọn size cho sản phẩm!',
                });
                return;
            }
            const newCart = {
                name,
                price,
                image,
                count,
                type,
                size,
            };
            await CartDataService.addCarts(newCart, user.uid);
            navigate('/cart');
        } else {
            navigate('/loginauth/*');
        }
    };

    const handleChooseSize = async (e) => {
        setSize(e.target.value);
    };

    useEffect(() => {
        // const newDetails = {
        //     size: size,
        // };
        // DetailsDataService.updateCart(newDetails, idItem);
        // itemDetails[0].size = size;
        localStorage.setItem('item', JSON.stringify(product));
    }, [size]);

    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    return (
        <>
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
            </div>
            <div className={cx('details-product')}>
                <div className={cx('container')}>
                    <div className={cx('row')}>
                        <div className={cx('col-lg-8')}>
                            <div
                                style={{ height: '625px' }}
                                className={cx('img-group')}
                            >
                                <div
                                    style={{ height: '100%' }}
                                    className={cx('img-grow')}
                                >
                                    <img
                                        style={{
                                            height: '100%',
                                            padding: '0 100px',
                                        }}
                                        src={product[0].image}
                                        alt="anh"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <h1>{product[0].name}</h1>
                            <p className={cx('vnd')}>
                                {VND.format(product[0].price)}
                            </p>
                            <div className={cx('option_product')}>
                                <p>{product[0].type}</p>
                                <img src={product[0].image} alt="anh"></img>
                            </div>
                            <label htmlFor="sizes" className={cx('size-label')}>
                                Chọn Size:
                            </label>
                            <select
                                onChange={handleChooseSize}
                                name="sizes"
                                className={cx('option-size')}
                            >
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                            </select>
                            <button
                                onClick={handleAdd}
                                className={cx('add-cart')}
                            >
                                <FontAwesomeIcon
                                    style={{
                                        fontSize: '20px',
                                        marginRight: '10px',
                                    }}
                                    icon={faCartPlus}
                                ></FontAwesomeIcon>
                                Thêm vào giỏ hàng
                            </button>
                            <button
                                className={cx('btn-buy')}
                                onClick={handleToCart}
                            >
                                Mua ngay
                            </button>
                            <ul className={cx('policy')}>
                                <li>Miễn phí ship cho đơn hàng từ 1 triệu</li>
                                <li>Đa dạng phương thức thanh toán</li>
                                <li>Đổi trả hàng miễn phí trong 30 ngày</li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('information-product')}>
                        <h3>Thông tin sản phẩm</h3>
                        <p>
                            <strong> KIỂU DÁNG: </strong>
                            SLIM FIT
                        </p>
                        <p>
                            <strong>CHI TIẾT:</strong>
                        </p>
                        <p>
                            - Sản phẩm form Slim fit ôm vừa vặn cơ thể, tôn dáng
                            người mặc.
                        </p>
                        <p>
                            - Sản phẩm thiết kế trẻ trung, thời thượng tạo nên
                            diện mạo nổi bật và lịch lãm cho các quý ông.
                        </p>
                        <p>
                            <strong>CHẤT LIỆU:</strong>
                        </p>
                        <p>
                            - 50% Bamboo mang đến sự thoáng mát, thấm hút tốt.
                        </p>
                        <p>
                            - 50% Polyspun giúp áo có khả năng đàn hồi tự nhiên
                            và ít nhăn co trong suốt quá trình sử dụng.
                        </p>
                        <p>
                            <strong>MÀU SẮC:</strong>&nbsp;Xám
                        </p>
                        <p>
                            <strong>SIZE:</strong>&nbsp;S, M, L, XL, XXL
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Details;
