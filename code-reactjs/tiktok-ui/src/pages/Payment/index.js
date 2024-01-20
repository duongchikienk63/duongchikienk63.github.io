import Footer from '~/components/Layout/Component/Footer';
import HeaderOnly from '~/components/Layout/HeaderBrand';
import classNames from 'classnames/bind';
import styles from './Payment.module.scss';
import { useState, useEffect, useRef } from 'react';
import BillDataService from '~/services/bills.services';
import CartDataService from '~/services/carts.services';
import ProductDataService from '~/services/products.services';
import PaymentList from './PaymentList';
import PaypalCheckoutButton from '~/components/payment';
import { useUserAuth } from '~/components/LoginWeb/context/UserAuthContext';
import UserDataService from '~/services/user.services';

import { useNavigate } from 'react-router-dom';

import { doc, updateDoc } from 'firebase/firestore';
import { db } from '~/firebase';

const cx = classNames.bind(styles);

// const navigate = useNavigate();

function Payment() {
    const navigate = useNavigate();

    const [carts, setCarts] = useState([]);
    // const [products, setProducts] = useState([]);
    const [totalPriceCarts, setTotalPriceCarts] = useState(0);
    const [ship, setShip] = useState(0);
    const [voucher, setVoucher] = useState(0);
    const [code, setCode] = useState('');
    const [totalPayment, setTotalPayment] = useState(0);
    const [exchange, setExchange] = useState(0);

    const [nameCustomers, setNameCustomers] = useState('');
    const [numCustomers, setNumCustomers] = useState('');
    const [emailCustomers, setEmailCustomers] = useState('');
    const [streetCustomers, setStreetCustomers] = useState('');
    const [addressCustomers, setAddressCustomers] = useState('');
    const [noteCustomers, setNoteCustomers] = useState('');

    const fixCode = useRef('');

    const name = useRef('');
    const phone = useRef('');
    const email = useRef('');
    const street = useRef('');
    const address = useRef('');
    const note = useRef('');

    const information = useRef(false);

    const { user } = useUserAuth();

    const [num, setNum] = useState(0);

    const inforUserHandler = async (e) => {
        e.preventDefault();
        try {
            if (user && user.email) {
                const docSnap = await UserDataService.getUser(user.email);
                setNameCustomers(docSnap.data().userName);
                setNumCustomers(docSnap.data().userPhone);
                setEmailCustomers(docSnap.data().userEmail);
                setStreetCustomers(docSnap.data().street);
                setAddressCustomers(docSnap.data().address);
            } else if (user && user.phoneNumber) {
                const docSnap = await UserDataService.getUser(user.phoneNumber);
                setNameCustomers(docSnap.data().userName);
                setNumCustomers(docSnap.data().userPhone);
                setEmailCustomers(docSnap.data().userEmail);
                setStreetCustomers(docSnap.data().street);
                setAddressCustomers(docSnap.data().address);
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    const updateInforUserHandler = (e) => {
        e.preventDefault();
        setNameCustomers('');
        setNumCustomers('');
        setEmailCustomers('');
        setStreetCustomers('');
        setAddressCustomers('');
    };

    const handleFixCode = () => {
        if (code != '') {
            fixCode.current = code;
        } else {
            fixCode.current = '';
        }
    };

    useEffect(() => {
        handleFixCode();
    }, [code]);

    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    useEffect(() => {
        setNum(randomNumberInRange(1, 1000000));
    }, []);

    useEffect(() => {
        handleInformation();
    }, [nameCustomers]);

    useEffect(() => {
        handleInformation();
    }, [numCustomers]);

    useEffect(() => {
        handleInformation();
    }, [emailCustomers]);

    useEffect(() => {
        handleInformation();
    }, [streetCustomers]);

    useEffect(() => {
        handleInformation();
    }, [addressCustomers]);

    useEffect(() => {
        handleInformation();
    }, [noteCustomers]);

    const handleInformation = () => {
        if (
            nameCustomers != '' &&
            numCustomers != '' &&
            emailCustomers != '' &&
            streetCustomers != '' &&
            addressCustomers != ''
        ) {
            information.current = true;
            name.current = nameCustomers;
            phone.current = numCustomers;
            email.current = emailCustomers;
            street.current = streetCustomers;
            address.current = addressCustomers;
            if (noteCustomers != '') {
                note.current = noteCustomers;
            } else {
                note.current = '';
            }
        } else {
            information.current = false;
        }
    };

    console.log(fixCode.current);

    let promotionCode = [
        {
            code: '100',
        },
    ];

    useEffect(() => {
        setExchange(Math.round((totalPayment / 24000) * 100) / 100);
    }, [totalPayment]);

    useEffect(() => {
        getCarts();
    }, []);

    const getCarts = async () => {
        const data = await CartDataService.getAllCarts(user.uid);
        setCarts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const handlerVoucher = () => {
        for (let i = 0; i < promotionCode.length; i++) {
            if (promotionCode[i].code == fixCode.current) {
                setVoucher(+promotionCode[i].code * 1000);
                alert('Bạn đã nhập thành công voucher!');
                return;
            } else {
                alert('Mã voucher chưa chính xác, vui lòng thử lại!');
            }
        }
    };

    useEffect(() => {
        let total = 0;
        for (let i = 0; i < carts.length; i++) {
            total += carts[i].count * carts[i].price;
        }
        setTotalPriceCarts(total);
    }, [carts]);

    useEffect(() => {
        handleShip();
    }, []);

    const handleShip = () => {
        if (totalPriceCarts == 0 && totalPriceCarts > 500000) {
            setShip(30000);
        } else {
            setShip(0);
        }
    };

    useEffect(() => {
        setTotalPayment(totalPriceCarts + ship - voucher);
    }, [totalPriceCarts, ship, voucher]);

    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    const USD = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const handleSubmit = async (detailsOrder) => {
        console.log('detailsOrder :', detailsOrder);
        if (detailsOrder.status === 'COMPLETED') {
            const newBill = {
                idUser: user.uid,
                code: num,
                userName: name.current,
                userPhone: phone.current,
                userEmail: email.current,
                street: street.current,
                address: address.current,
                bill: carts,
                total: totalPayment,
                note: note.current,
            };

            if (user && user.email) {
                const userUid = doc(db, 'user', user.email);

                // Set the "capital" field of the city 'DC'
                updateDoc(userUid, {
                    userName: name.current,
                    userPhone: phone.current,
                    userEmail: email.current,
                    street: street.current,
                    address: address.current,
                });
            } else if (user && user.phoneNumber) {
                const userUid = doc(db, 'user', user.phoneNumber);

                // Set the "capital" field of the city 'DC'
                updateDoc(userUid, {
                    userName: name.current,
                    userPhone: phone.current,
                    userEmail: email.current,
                    street: street.current,
                    address: address.current,
                });
            }

            await BillDataService.addBill(newBill);

            for (let i = 0; i < carts.length; i++) {
                const data = await ProductDataService.getAllProducts();

                const listProducts = data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                for (let j = 0; j < listProducts.length; j++) {
                    if (carts[i].name === listProducts[j].name) {
                        if (listProducts[j].total > 0) {
                            let total = listProducts[j].total;
                            let sold = listProducts[j].sold;
                            const newProduct = {
                                total: +total - +carts[i].count,
                                sold: +sold + +carts[i].count,
                            };
                            await ProductDataService.updateProduct(
                                listProducts[j].id,
                                newProduct,
                            );
                        }
                    }
                }
                await CartDataService.deleteCart(carts[i].id, user.uid);
            }
            getCarts();
            alert('Thanh toán thành công!');
            navigate('/');
        }
    };

    return (
        <div>
            <HeaderOnly
                freeze="&nbsp;Giỏ hàng"
                back="/cart"
                name="/ Thanh toán"
            />
            <div className={cx('payment')}>
                <div className={cx('container')}>
                    <form action="#">
                        <div className={cx('row')}>
                            <div className={cx('col-8')}>
                                <h2>GIAO HÀNG VÀ THANH TOÁN</h2>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        marginBottom: '20px',
                                    }}
                                >
                                    <p>Thông tin giao hàng</p>
                                    <div>
                                        <button
                                            onClick={updateInforUserHandler}
                                            style={{ marginRight: '15px' }}
                                            className={cx('btn-infor')}
                                        >
                                            Chỉnh sửa
                                        </button>
                                        <button
                                            onClick={inforUserHandler}
                                            className={cx('btn-infor')}
                                        >
                                            Sử dụng thông tin sẵn có
                                        </button>
                                    </div>
                                </div>
                                <div className={cx('row')}>
                                    <div className={cx('col-12')}>
                                        <input
                                            className={cx('input')}
                                            type="text"
                                            placeholder="Họ và tên người nhận"
                                            value={nameCustomers}
                                            onChange={(e) =>
                                                setNameCustomers(e.target.value)
                                            }
                                        ></input>
                                    </div>
                                    <div className={cx('col-6')}>
                                        <input
                                            className={cx('input')}
                                            type="tel"
                                            placeholder="Số điện thoại"
                                            value={numCustomers}
                                            onChange={(e) =>
                                                setNumCustomers(e.target.value)
                                            }
                                        ></input>
                                    </div>
                                    <div className={cx('col-6')}>
                                        <input
                                            className={cx('input')}
                                            type="email"
                                            placeholder="Email người nhận hàng"
                                            value={emailCustomers}
                                            onChange={(e) =>
                                                setEmailCustomers(
                                                    e.target.value,
                                                )
                                            }
                                        ></input>
                                    </div>
                                    <div className={cx('col-12')}>
                                        <input
                                            className={cx('input')}
                                            type="text"
                                            placeholder="Tỉnh/Thành phố, Quận/Huyện"
                                            value={streetCustomers}
                                            onChange={(e) =>
                                                setStreetCustomers(
                                                    e.target.value,
                                                )
                                            }
                                        ></input>
                                    </div>
                                    <div className={cx('col-12')}>
                                        <input
                                            className={cx('input')}
                                            type="text"
                                            placeholder="Địa chỉ giao hàng cụ thể"
                                            value={addressCustomers}
                                            onChange={(e) =>
                                                setAddressCustomers(
                                                    e.target.value,
                                                )
                                            }
                                        ></input>
                                    </div>
                                </div>
                                <div className={cx('note')}>
                                    <p>Ghi chú</p>
                                    <input
                                        type="text"
                                        placeholder="Bạn có muốn nhắn gì tới chúng tôi không?"
                                        value={noteCustomers}
                                        onChange={(e) =>
                                            setNoteCustomers(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className={cx('col-4')}>
                                <div className={cx('confirm')}>
                                    <p className={cx('confirm-voucher')}>
                                        Mã giảm giá của bạn
                                    </p>
                                    <div className={cx('voucher')}>
                                        <input
                                            type="text"
                                            placeholder="Nhập mã giảm giá"
                                            id="promo-code"
                                            onChange={(e) =>
                                                setCode(e.target.value)
                                            }
                                        />
                                        <button
                                            type="button"
                                            onClick={handlerVoucher}
                                        >
                                            Áp dụng
                                        </button>
                                    </div>
                                    <p className={cx('order')}>
                                        GIỎ HÀNG CỦA BẠN ({carts.length})
                                    </p>
                                    <div className={cx('scroller')}>
                                        {carts.map((doc, index) => {
                                            return (
                                                <PaymentList
                                                    key={index}
                                                    name={doc.name}
                                                    image={doc.image}
                                                    count={doc.count}
                                                    type={doc.type}
                                                    size={doc.size}
                                                    price={doc.price}
                                                />
                                            );
                                        })}
                                    </div>
                                    <div className={cx('provisional')}>
                                        <span>Tạm tính:</span>
                                        <p>{VND.format(totalPriceCarts)}</p>
                                    </div>
                                    <div className={cx('ship')}>
                                        <span>Phí vận chuyển:</span>
                                        <p id="ship">{VND.format(ship)}</p>
                                    </div>
                                    <div className={cx('count-voucher')}>
                                        <span>Giảm giá:</span>
                                        <p id="vat">{VND.format(voucher)}</p>
                                    </div>
                                    <div className={cx('confirm-price-total')}>
                                        <span>Thành tiền:</span>
                                        <p id="count-total">
                                            {VND.format(totalPayment)}
                                        </p>
                                    </div>
                                    <div className={cx('confirm-price-total')}>
                                        <span>Chuyển đổi:</span>
                                        <p id="count-total">
                                            {USD.format(exchange)}
                                        </p>
                                    </div>
                                    <PaypalCheckoutButton
                                        amount={exchange.toString()}
                                        onSubmitPaypal={handleSubmit}
                                        checkInformation={information}
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Payment;
