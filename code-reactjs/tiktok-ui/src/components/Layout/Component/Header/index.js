import Image from '~/assets/img';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Menu from '../Menu';
import Search from '../Search';
// import { text } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    // faMagnifyingGlass,
    faCartShopping,
    faPhone,
    faCircleUser,
} from '@fortawesome/free-solid-svg-icons';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';
import { Link, useNavigate } from 'react-router-dom';
import CartDataService from '~/services/carts.services';
import { useState, useEffect } from 'react';
import { useUserAuth } from '~/components/LoginWeb/context/UserAuthContext';

import { doc, updateDoc } from 'firebase/firestore';
import { db } from '~/firebase';

// import { getAuth, getUser } from 'firebase/auth';

const cx = classNames.bind(styles);

function Header(props) {
    const [carts, setCarts] = useState([]);

    // const [items, setItems] = useState([]);

    // const [shift, setShift] = useState([]);

    const { logOut, user } = useUserAuth();

    const [hide, setHide] = useState('none');

    const [admin, setAdmin] = useState('none');

    const [client, setClient] = useState('flex');

    const [flexDirection, setFlexDirection] = useState('flex');

    const [presently, setPresently] = useState('flex');

    const [checkUser, setCheckUser] = useState('/loginauth/*');

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            setPresently('flex');
            setHide('none');
            setAdmin('none');
            navigate('/');
            getCarts();
            await logOut();
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        if ((user && user.email) || (user && user.phoneNumber)) {
            setPresently('none');
            setHide('flex');
            setCheckUser('/cart');
            setClient('flex');
            setFlexDirection('');
            if (user.email === 'admin@gmail.com') {
                setAdmin('flex');
                setClient('none');
                setFlexDirection('row-reverse');
            }
        }
    }, [user]);

    const getCarts = async () => {
        const idUser = user.uid;
        if (idUser) {
            const data = await CartDataService.getAllCarts(idUser);
            setCarts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        } else {
            setCarts([]);
        }
    };

    useEffect(() => {
        if (user && user.email) {
            const userUid = doc(db, 'user', user.uid);

            // Set the "capital" field of the city 'DC'
            updateDoc(userUid, {
                uid: user.uid,
            });
        } else if (user && user.phoneNumber) {
            const userUid = doc(db, 'user', user.uid);

            // Set the "capital" field of the city 'DC'
            updateDoc(userUid, {
                uid: user.uid,
            });
        }
    }, [user]);

    useEffect(() => {
        getCarts();
    }, [carts]);

    return (
        <div>
            <div className={cx('header-content')}>
                <div className={cx('header-advertisement')}>
                    <div style={{ display: client }} className={cx('qc')}>
                        <p>Tặng Voucher 100K Cho Hóa Đơn Từ 1 Triệu</p>
                    </div>
                </div>
                <div style={{ display: presently }} className={cx('user')}>
                    <button className={cx('phone-user')}>
                        <FontAwesomeIcon
                            style={{ marginRight: '5px' }}
                            icon={faPhone}
                        ></FontAwesomeIcon>
                        0705155283
                    </button>
                    <span id={cx('righteous')}></span>
                    <button id={cx('login')}>
                        <Link style={{ color: 'white' }} to="/loginauth">
                            Đăng Nhập
                        </Link>
                        <FontAwesomeIcon
                            style={{ marginLeft: '5px' }}
                            icon={faCircleUser}
                        ></FontAwesomeIcon>
                    </button>
                </div>
                <div style={{ display: hide }} className={cx('user-name')}>
                    <p>
                        Xin chào, &nbsp;{' '}
                        {(user && user.email) || (user && user.phoneNumber)}
                    </p>
                </div>
                <div style={{ display: hide }} className={cx('user')}>
                    <button id={cx('login')} onClick={handleLogout}>
                        Đăng Xuất
                        <FontAwesomeIcon
                            style={{ marginLeft: '5px' }}
                            icon={faCircleUser}
                        ></FontAwesomeIcon>
                    </button>
                </div>
            </div>
            <div
                style={{ flexDirection: flexDirection }}
                className={cx('header-menu')}
            >
                <Image />
                <div className={cx('header-menu_item')}>
                    <ul>
                        <Menu hide={client} active={props.home} to="/">
                            TRANG CHỦ
                        </Menu>
                        <Menu hide={client} active={props.brand} to="/brand">
                            THƯƠNG HIỆU
                        </Menu>
                        <Menu
                            hide={client}
                            active={props.product}
                            to="/product"
                            
                        >
                            SẢN PHẨM
                            <div className={cx('category')}>
                                <p>
                                    <Link to="/shirt">Áo sơmi</Link>
                                </p>
                                <p>
                                    <Link to="/trouser">Quần dài</Link>
                                </p>
                            </div>
                        </Menu>
                        <Menu
                            hide={client}
                            active={props.collection}
                            to="/collection"
                        >
                            BỘ SƯU TẬP
                        </Menu>
                        <Menu hide={admin} active={props.admin} to="/admin">
                            QUẢN LÝ KHO HÀNG
                        </Menu>
                        <Menu hide={admin} active={props.bill} to="/bill">
                            QUẢN LÝ ĐƠN HÀNG
                        </Menu>
                    </ul>
                </div>
                <div style={{ display: client }} className={cx('search')}>
                    <Search />
                    <Link to={checkUser}>
                        <FontAwesomeIcon
                            className={cx('cart')}
                            icon={faCartShopping}
                        />
                        <div className={cx('total-item')}>{carts.length}</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
